import type { NextApiRequest, NextApiResponse } from 'next';
import { API_BASE_URL } from '../../constants/path';

export const searchHandler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { query } = req.query;
    const response = await fetch(
        `${API_BASE_URL}/search/movie?query=${query}&api_key=${process.env.API_KEY}`
    );
    const { results } = await response.json();

    res.json(results);
};

export default searchHandler;
