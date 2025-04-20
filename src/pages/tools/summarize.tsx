import React, { useState } from 'react';
import { Input, Button, Slider } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import ToolContainer from '../../components/ToolContainer';
import ProtectedRoute from '../../components/ProtectedRoute';
import useTool from '../../hooks/useTool';
import styles from '../../styles/SummarizeTool.module.css';

const { TextArea } = Input;

const SummarizeTool: React.FC = () => {
  const [conciseness, setConciseness] = useState(5);

  const {
    content,
    setContent,
    result,
    loading,
    handleAction: handleSummarize,
    handleReset: baseHandleReset,
    handleCopy,
  } = useTool({
    action: 'summarize',
    resetState: () => setConciseness(5),
  });

  const handleReset = () => {
    baseHandleReset();
    setConciseness(5);
  };

  return (
    <ProtectedRoute>
      <ToolContainer
        title="Summarize Text"
        loading={loading}
        result={result}
        resultTitle="Summary"
        onCopy={handleCopy}
        className={styles.container}
      >
        <TextArea
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter text to summarize..."
          className={styles.textarea}
        />
        
        <div className={styles.sliderContainer}>
          <span>Conciseness Level:</span>
          <Slider
            min={10}
            max={90}
            value={conciseness}
            onChange={setConciseness}
            className={styles.slider}
            tooltip={{ formatter: (value) => `${value}` }}
          />
          <span>{conciseness}</span>
        </div>
        
        <div className={styles.buttonGroup}>
          <Button 
            type="primary" 
            onClick={() => handleSummarize({ 
              content, 
              options: { conciseness } 
            })} 
            disabled={loading}
          >
            Summarize
          </Button>
          <Button onClick={handleReset} icon={<ReloadOutlined />}>
            Reset
          </Button>
        </div>
      </ToolContainer>
    </ProtectedRoute>
  );
};

export default SummarizeTool;
