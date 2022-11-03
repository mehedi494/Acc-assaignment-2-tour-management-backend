

const { handleError } = require("../error/handleError")
const services = require("../services/tour.services")

exports.getAllTourController = async (req, res, next) => {
    try {
        const filters = { ...req.query }
        const queryExclude = ["sort", "fields", "page", "limit"]
        queryExclude.forEach(query => delete filters[query])
        console.log(req.query);

        let queries = {}
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ")
            queries.fields = fields
            console.log("req.query");  
        }
        if (req.query.sort) {
            const sort = req.query.sort.split(",").join(" ")
            queries.sort = sort;
        }
       
            const { page = 1, limit = 5 } = req.query;
            const skip = (page - 1) * (+limit)
            queries.skip = skip;
            queries.limit = limit;


        


        const result = await services.getAllProductsService(filters, queries)
        res.json({
            status: "success",
            messeage: "Data Successfully loaded",
            result: result
        })
    }
    catch (error) {
        handleError(req,res,error)
        // res.json({
        //     status: "faild",
        //     message: "can't fetch data",
        //     result: error.message
        // })
    }
}


exports.getTourByIdConroller = async (req, res, next) => {
    try {

        const result = await services.getTourByIdService(req.params.id)
        res.json({
            status: "success",
            messeage: "data fatch succfully ",
            result: result
        })
    } catch (error) {
        handleError(req, res, error)
        // res.json({
        //     status: "faild",
        //     message: "can't fetch data",
        //     result: error.message
        // })
    }
}
exports.cheapestTourController = async (req, res, next) => {
    try {
        const result = await services.cheapestServices()
        res.json({
            status: "success",
            messeage: "Top 3 cheapest Package",
            result: result
        })
    } catch (error) {
        handleError(req, res, error)
        // res.json({
        //     status: "faild",
        //     message: "can't fetch data",
        //     result: error.message
        // })
    }
}
exports.trendingController = async (req, res, next) => {
    try {
        const result = await services.trendingServices()
        res.json({
            status: "success",
            messeage: "Top 3 viewed tour",
            result: result
        })
    } catch (error) {
        handleError(req, res, error)
        // res.json({
        //     status: "faild",
        //     message: "can't fetch data",
        //     result: error.message
        // })
    }
}

exports.createATourController = async (req, res, next) => {

    try {

        const result = await services.createAProductService(req.body)
        // console.log(req.body)
        res.status(200).json({
            status: "success",
            message: "Date Save Successfully",
            result: result
        })
    }
    catch (error) {
        handleError(req, res, error)
        // res.json({
        //     status: "faild",
        //     message: "can't save data",
        //     result: error.message
        // })
    }
}
exports.updateATourController = async (req, res, next) => {

    try {

        const result = await services.updateATourService(req.params.id, req.body)

        res.status(200).json({
            status: "success",
            message: "data was update Successfully",

        })
    }
    catch (error) {
        handleError(req, res, error)
        // res.json({
        //     status: "faild",
        //     message: "can't save data",
        //     result: error.message
        // })
    }
}
exports.bulkUpdateController = async (req, res, next) => {

    try {

        const result = await services.bulkUpdateService(req.body)

        res.status(200).json({
            status: "success",
            message: "data was update Successfully",

        })
    }
    catch (error) {
        handleError(req, res, error)
        // res.json({
        //     status: "faild",
        //     message: "update were faild",
        //     result: error.message
        // })
    }

}
exports.deleteToureController = async (req, res, next) => {

    try {

        const result = await services.deleteTourService(req.params.id)

        res.status(200).json({
            status: "success",
            message: "data was deleted Successfully",

        })
    }
    catch (error) {
        handleError(req, res, error)
        // res.json({
        //     status: "faild",
        //     message: "update were faild",
        //     result: error.message
        // })
    }

}
