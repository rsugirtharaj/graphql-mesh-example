package com.example;

import io.grpc.stub.StreamObserver;


public class ProductReviewService extends ProductReviewServiceGrpc.ProductReviewServiceImplBase {

    @Override
    public void getProductReviews(Service.ReviewRequest request, StreamObserver<Service.Product> responseObserver) {
        Service.Product product = Service.Product.newBuilder()
                .setProductId(request.getProductId())
                .addReviews(getSampleReviews())
                .build();
        responseObserver.onNext(product);
        responseObserver.onCompleted();
    }

    private Service.Review getSampleReviews() {
        return Service.Review.newBuilder()
                .setProductId(1234)
                .setRating(5)
                .setUserName("John Doe")
                .setReviewText("Excellent Product!")
                .build();
    }
}
