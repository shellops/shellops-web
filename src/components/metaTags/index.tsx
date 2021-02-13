import React, { ReactElement } from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  description: string;
  pageUrl: string;
}

const MetaTags: React.FC<Props> = ({
  title,
  description,
  pageUrl,
  children,
}) => {
  return (
    <Head>
      <title>{`Shellops ${title ? ' |  ' + title : ''}`}</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='shortcut icon' href='/favicon.png' type='image/icon' />
      <meta name='description' content={description} />
      <meta name='robots' content='index,follow' />
      <link rel='canonical' href={pageUrl} />
      <meta
        name='keywords'
        content={
          'shellOps, docker management, docker manager, devOps manager, assistant Developers,setup docker apps'
        }
      />
      <meta name='msapplication-TileColor' content='#89bfe6' />
      <meta name='theme-color' content='#89bfe6' />
      {children}
    </Head>
  );
};

export default MetaTags;
