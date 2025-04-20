import React from 'react';
import { Input, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import ToolContainer from '../../components/ToolContainer';
import ProtectedRoute from '../../components/ProtectedRoute';
import useTool from '../../hooks/useTool';
import styles from '../../styles/RewriteTool.module.css';

const { TextArea } = Input;

const RewriteTool: React.FC = () => {
  const {
    content,
    setContent,
    result,
    loading,
    handleAction: handleRewrite,
    handleReset,
    handleCopy,
  } = useTool({
    action: 'rewrite',
  });

  return (
    <ProtectedRoute>
      <ToolContainer
        title="Rewrite Text"
        loading={loading}
        result={result}
        resultTitle="Rewritten Text"
        onCopy={handleCopy}
        className={styles.container}
      >
        <TextArea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter text to rewrite..."
          className={styles.textarea}
        />
        <div className={styles.buttonGroup}>
          <Button type="primary" onClick={() => handleRewrite()} disabled={loading}>
            Rewrite
          </Button>
          <Button onClick={handleReset} icon={<ReloadOutlined />}>
            Reset
          </Button>
        </div>
      </ToolContainer>
    </ProtectedRoute>
  );
};

export default RewriteTool;
