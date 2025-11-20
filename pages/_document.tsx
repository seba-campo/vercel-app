import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

/**
 * Custom Document configurado para CSR
 * Define la estructura HTML base
 */
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    {/* Meta tags básicos */}
                    <meta charSet="utf-8" />
                    <meta name="description" content="E-commerce - Compralo" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <style>{`* { box-sizing: border-box; margin: 0; padding: 0; }`}</style>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
