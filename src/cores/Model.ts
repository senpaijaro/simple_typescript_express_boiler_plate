
class _Model {

    public static options(req: any, select: any = {}, sort: any = {}) {
        let page = 1;
        let limit = 30;
        
        if (req.query?.page) page = parseInt(req.query.page || page);
        if (req.query?.limit) limit = parseInt(req.query.limit || limit);

        return {
            page: page,
            limit: limit,
            collation: { locale: 'en' },
            customLabels: { 
                docs: 'list',
                totalDocs: 'count',
            }
        };
    }

    public static async paginate(Model: any, filter: any = {}, options: any = {}) {
        const results = await Model.paginate(filter, options);
        return results;
    }
}

export default _Model;