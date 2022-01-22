import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import flush from 'styled-jsx/server';

export default class WebappDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<{
        styles: any;
        html: string;
        head?: any[];
    }> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                        {flush() || null}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}