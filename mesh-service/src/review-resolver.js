module.exports = (root, { ReviewService }) => ReviewService.api.GetProductReviews({input: {productId: root.productId}})
