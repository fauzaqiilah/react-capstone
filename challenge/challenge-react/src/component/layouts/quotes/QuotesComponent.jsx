import React from 'react';
import { Image, Typhography } from 'antd';

const QuotesComponent = () => {
    
    return (
        <>
        <div className='container'>
            <Image className="image"
        preview={{
          visible: false,
        }}
        width={300}
        justify-content='center'
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        onClick={() => setVisible(true)}
      />
      <div
        style={{
          display: 'none',
        }}
      >
      </div>

      <Typography.Title
        editable
        level={1}
        style={{
          margin: 0,
        }}
      >
        h1. Ant Design
      </Typography.Title>
      </div>
        </>
    );
}

export default QuotesComponent;
