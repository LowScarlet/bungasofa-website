const ApiGetInstagramPost = async (req:any, res:any) => {
    if (req.method === 'GET') {
        const fields = 'id,media_type,media_url,username,timestamp,caption,permalink,thumbnail_url'
        const access_token = process.env.INSTA_TOKEN;

        try {
            const apiRes = await fetch(`https://graph.instagram.com/v14.0/me/media?fields=${fields}&access_token=${access_token}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            const data = await apiRes.json();

            if (apiRes.status === 200) {
                return res.status(200).json(data);
            } else {
                return res.status(apiRes.status).json({
                    detail: 'Something went wrong (1)'
                });
            }
        } catch(err) {
            return res.status(500).json({
                detail: 'Something went wrong (2)'
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({
            detail: `Method ${req.method} now allowed`
        });
    } 
};

export default ApiGetInstagramPost