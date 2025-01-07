'use client';

import StreamrClient from '@streamr/sdk';

export default function Test() {
  const startSubscribing = () => {
    const streamId = 'streams.dimo.eth/firehose/weather';
    const streamr = new StreamrClient({
      auth: { privateKey: StreamrClient.generateEthereumAccount().privateKey },
    });

    streamr.subscribe(streamId, (message) => {
      console.log(message);
    });
  };

  return <div onClick={startSubscribing}>Click To Subscribe</div>;
}
