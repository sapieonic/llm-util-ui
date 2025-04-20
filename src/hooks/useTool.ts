import { useState } from 'react';
import { message } from 'antd';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

interface UseToolOptions {
  action: string;
  validateInput?: (content: string, options?: any) => string | null;
  resetState?: () => void;
}

interface ApiRequestOptions {
  content: string;
  options?: any;
}

const useTool = ({ action, validateInput, resetState }: UseToolOptions) => {
  const [content, setContent] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();

  const handleAction = async (requestOptions?: ApiRequestOptions) => {
    // Check if user is authenticated
    if (!currentUser) {
      message.error('Please sign in to use this tool');
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath },
      });
      return;
    }

    const inputContent = requestOptions?.content || content;
    
    // Validate input if validation function is provided
    if (validateInput) {
      const errorMessage = validateInput(inputContent, requestOptions?.options);
      if (errorMessage) {
        message.error(errorMessage);
        return;
      }
    } else if (!inputContent.trim()) {
      message.error(`Please enter some text to ${action}.`);
      return;
    }

    setLoading(true);
    try {
      // Get the user's ID token for authentication
      const idToken = await currentUser.getIdToken();
      
      const response = await fetch('https://api.llm-util.com/api/v1/util', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          action,
          content: inputContent,
          options: requestOptions?.options,
          userId: currentUser.uid,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      const { data } = result;
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error);
      message.error('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setContent('');
    setResult('');
    if (resetState) {
      resetState();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result).then(() => {
      message.success(`${action.charAt(0).toUpperCase() + action.slice(1)} copied to clipboard`);
    }).catch(() => {
      message.error('Failed to copy content');
    });
  };

  return {
    content,
    setContent,
    result,
    loading,
    handleAction,
    handleReset,
    handleCopy,
  };
};

export default useTool;
