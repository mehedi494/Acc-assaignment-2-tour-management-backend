const Tour = require("../models/tour.schema");

exports.getAllProductsService = async (filters, queries) => {

    const tour = await Tour.find(filters)
        .select(queries.fields)
        .limit(queries.limit)
        .skip(queries.skip)
        .sort(queries.sort);
    const found = tour.length
    const page = Math.ceil((found / queries.limit));
    return { found, page, tour }
}
exports.getTourByIdService = async (params) => {

    const result = await Tour.findByIdAndUpdate({ _id: params });
    result.$inc("view", 1);
    const finalResult = await result.save()

    return finalResult
}
exports.cheapestServices = async () => {
    const result = await (await Tour.find({}).select("-createdAt -updatedAt -__v").sort({ pkgprice: "1" }).limit(3));
    const found = result.length
    return { found, result }
}
exports.trendingServices = async () => {
    const result = await (await Tour.find({}).select("-createdAt -updatedAt -__v").sort({ view: "-1" }).limit(3));
    const found = result.length
    return { found, result }
}
exports.createAProductService = async (data) => {
    data.view = 0
    const tour = await Tour.create(data)
    return tour
}

exports.updateATourService = async (id, bodyData) => {
    const tour = await Tour.updateOne({ _id: id }, { $set: bodyData }, { runValidators: true })
    return tour;
}
exports.bulkUpdateService = async (body) => {
    const bulkUpdate = [];
    body.ids.forEach(tour => { bulkUpdate.push(Tour.updateOne({ _id: tour.id }, tour.data)) })
    const result = Promise.all(bulkUpdate)
    return result;
}

exports.deleteTourService = async (id) => {
    
    const tour = await Tour.deleteOne({_id:id})
    return tour
}