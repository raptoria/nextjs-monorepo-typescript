import { IElements } from '@myscope/visualizations'

export const initialElements: IElements[] = [
    {
        id: '1',
        data: {
            label: 'unknown_face_embedder_detector'
        },
        type: 'queue'
    },
    {
        id: '2',
        data: {
            label: 'tracker'
        },
        type: 'queue'
    },
    {
        id: '3',
        data: {
            label: 'face_matcher'
        },
        type: 'queue'
    },
    {
        id: '5',
        data: {
            label: 'video_indexed'
        },
        type: 'queue'
    },
    {
        id: '7',
        data: {
            label: 'known_person'
        },
        type: 'queue'
    },
    {
        id: '8',
        data: {
            label: 'known_face_embedder_detector'
        },
        type: 'queue'
    },
    {
        id: '10',
        data: {
            label: 'face_clusterer'
        },
        type: 'queue'
    },
    {
        id: '0',
        data: {
            label: 'Unknown Face Embedder Detector Indexer'
        },
        type: 'processor'
    },
    {
        id: '4',
        data: {
            label: 'Object Detector Indexer'
        },
        type: 'processor'
    },
    {
        id: '6',
        data: {
            label: 'Known Person Image Indexer'
        },
        type: 'processor'
    },
    {
        id: '9',
        data: {
            label: 'Face Matching Indexer'
        },
        type: 'processor'
    },
    {
        id: '11',
        data: {
            label: 'Known Face Embedder Detector Indexer'
        },
        type: 'processor'
    },
    {
        id: '12',
        data: {
            label: 'Face Clustering Sleuth'
        },
        type: 'processor'
    },
    {
        id: '1_0_0',
        source: '1',
        target: '0',
        edgeType: 'smoothstep',
        animated: true,
        label: null
    },
    {
        id: '5_4_0',
        source: '5',
        target: '4',
        edgeType: 'smoothstep',
        animated: true,
        label: null
    },
    {
        id: '7_6_0',
        source: '7',
        target: '6',
        edgeType: 'smoothstep',
        animated: true,
        label: null
    },
    {
        id: '3_9_0',
        source: '3',
        target: '9',
        edgeType: 'smoothstep',
        animated: true,
        label: null
    },
    {
        id: '8_11_0',
        source: '8',
        target: '11',
        edgeType: 'smoothstep',
        animated: true,
        label: null
    },
    {
        id: '10_12_0',
        source: '10',
        target: '12',
        edgeType: 'smoothstep',
        animated: true,
        label: null
    },
    {
        id: '0_2_0',
        source: '0',
        target: '2',
        edgeType: 'smoothstep',
        animated: true,
        label: 'detection-*'
    },
    {
        id: '0_3_0',
        source: '0',
        target: '3',
        edgeType: 'smoothstep',
        animated: true,
        label: 'embedding-*'
    },
    {
        id: '4_1_0',
        source: '4',
        target: '1',
        edgeType: 'smoothstep',
        animated: true,
        label: 'detection-person'
    },
    {
        id: '4_1_0_male',
        source: '4',
        target: '1',
        edgeType: 'smoothstep',
        animated: true,
        label: 'detection-male'
    },
    {
        id: '4_1_0_female',
        source: '4',
        target: '1',
        edgeType: 'smoothstep',
        animated: true,
        label: 'detection-female'
    },
    {
        id: '6_8_0',
        source: '6',
        target: '8',
        edgeType: 'smoothstep',
        animated: true,
        label: 'forward inputs'
    },
    {
        id: '9_10_0',
        source: '9',
        target: '10',
        edgeType: 'smoothstep',
        animated: true,
        label: 'sleuth_output-*'
    },
    {
        id: '11_3_0',
        source: '11',
        target: '3',
        edgeType: 'smoothstep',
        animated: true,
        label: 'embedding-*'
    }
]
