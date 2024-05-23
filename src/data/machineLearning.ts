import Algo from "@/enums/algorithm"

const machineLearningProjects = [
    {
        id: 1,
        name: 'House Price Prediction',
        description: 'House pricing prediction using different regression models',
        algorithm: [Algo.SUPERVISED, Algo.REGRESSION, Algo.ENSEMBLE, Algo.DECISION_TREE],
        repo: 'https://github.com/maxellmilay/house-pricing-prediction'
    },
    {
        id: 2,
        name: 'Lunar Lander',
        description: 'A reinforcement model that corrects a lunar module to land properly in a selected area',
        algorithm: [Algo.REINFORCEMENT, Algo.DEEP_Q_LEARNING],
        repo: 'https://github.com/maxellmilay/lunar-lander'
    },
    {
        id: 3,
        name: 'Customer Segmentation',
        description: 'An unsupervised customer classifier model using clustering',
        algorithm: [Algo.UNSUPERVISED, Algo.CLUSTERING, Algo.K_MEANS],
        repo: 'https://github.com/maxellmilay/customer-segmentation'
    },
    {
        id: 4,
        name: 'Handwritten Digit Recognition',
        description: 'Neural network digit classification using the MNIST dataset',
        algorithm: [Algo.NEURAL_NETWORK],
        repo: 'https://github.com/maxellmilay/handwritten-digit-recognition'
    },
    {
        id: 5,
        name: 'Movie Recommender System',
        description: 'A recommendation system that suggest movies based on content and properties',
        algorithm: [Algo.VECTORIZATION, Algo.SIMILARITY_SEARCH],
        repo: 'https://github.com/maxellmilay/movie-recommendation-system'
    },
    {
        id: 6,
        name: 'Customer Segmentation',
        description: 'An unsupervised customer classifier model using clustering',
        algorithm: [Algo.UNSUPERVISED, Algo.CLUSTERING, Algo.K_MEANS],
        repo: 'https://github.com/maxellmilay/customer-segmentation'
    },
    {
        id: 6,
        name: 'Iris Clustering',
        description: 'Iris flower classifier using clustering',
        algorithm: [Algo.UNSUPERVISED, Algo.CLUSTERING, Algo.K_MEANS],
        repo: 'https://github.com/maxellmilay/iris-clustering'
    },
]

export default machineLearningProjects