import { StreamrClient } from '@streamr/sdk';

export const startSubscribing = () => {
  const streamId = 'streams.dimo.eth/firehose/weather';
  // Add a browser wallet (e.g. Metamask) to check if the address has permission to read the stream
  const streamr = new StreamrClient({
    auth: { privateKey: StreamrClient.generateEthereumAccount().privateKey },
    // if you don't want to make your users connect a wallet use this instead:
    // auth: { privateKey: process.env.PRIVATE_KEY },
  });

  streamr.subscribe(streamId, (message) => {
    console.log(message);
  });
};
