import type { NextPage } from 'next';
import { Layout } from '../components/Layout';

const AboutPage: NextPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>
                <a
                    href="https://developers.themoviedb.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    🔗 The Movie DB API
                </a>
            </p>
            <p>
                <a
                    href="https://github.com/artemershov"
                    target="_blank"
                    rel="noreferrer"
                >
                    🔗 Authors GitHub
                </a>
            </p>
        </Layout>
    );
};

export default AboutPage;
