var settings = {
    // CONTENT SOURCE
    // The optional add-on nanoPhotosProvider is used for this example - this is not mandatory and can easily be replaced by a list of medias
    kind: 'flickr',
    userID: '190803023@N07',
    flickrAPIKey: 'b3110bf21114317a7c6e547b21e35627',

    // GALLERY AND THUMBNAIL LAYOUT
    galleryMosaic: [                       // default layout
        // w=Ширина h=Высота c=Столбец r=Строка
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 0, h: 0, c: 2, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 2, c: 4, r: 1 },
        { w: 2, h: 1, c: 5, r: 1 },
        { w: 0, h: 1, c: 6, r: 1 },

        { w: 0, h: 0, c: 1, r: 2 },
        { w: 0, h: 0, c: 2, r: 2 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 0, c: 4, r: 2 },
        { w: 2, h: 2, c: 5, r: 2 },
        { w: 0, h: 0, c: 6, r: 2 },

        { w: 1, h: 2, c: 1, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 0, h: 0, c: 3, r: 3 },
        { w: 1, h: 1, c: 4, r: 3 },
        { w: 0, h: 0, c: 5, r: 3 },
        { w: 0, h: 0, c: 6, r: 3 },

        { w: 0, h: 0, c: 1, r: 4 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 2, h: 1, c: 3, r: 4 },
        { w: 0, h: 0, c: 4, r: 4 },
        { w: 1, h: 1, c: 5, r: 4 },
        { w: 1, h: 1, c: 6, r: 4 },

        { w: 1, h: 1, c: 1, r: 5 },
        { w: 1, h: 1, c: 2, r: 5 },
        { w: 1, h: 1, c: 3, r: 5 },
        { w: 1, h: 2, c: 4, r: 5 },
        { w: 1, h: 1, c: 5, r: 5 },
        { w: 1, h: 1, c: 6, r: 5 },

        { w: 3, h: 1, c: 1, r: 6 },
        { w: 0, h: 1, c: 2, r: 6 },
        { w: 0, h: 1, c: 3, r: 6 },
        { w: 1, h: 0, c: 4, r: 6 },
        { w: 1, h: 1, c: 5, r: 6 },
        { w: 1, h: 1, c: 6, r: 6 },

        { w: 1, h: 1, c: 1, r: 7 },
        { w: 1, h: 1, c: 2, r: 7 },
        { w: 1, h: 1, c: 3, r: 7 },
        { w: 1, h: 1, c: 4, r: 7 },
        { w: 1, h: 1, c: 5, r: 7 },
        { w: 1, h: 1, c: 6, r: 7 },

    ],
    galleryMosaicXS: [                     // layout for XS width
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 1, h: 1, c: 3, r: 4 }
    ],
    galleryMosaicSM: [                     // layout for SM width
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 1, h: 1, c: 3, r: 4 }
    ],

    galleryDisplayMode: 'fullContent',
    gallerySorting: 'random',
    thumbnailDisplayOrder: 'random',

    thumbnailHeight: '1080', thumbnailWidth: '1920',
    thumbnailAlignment: 'scaled',
    thumbnailGutterWidth: 3, thumbnailGutterHeight: 3,
    thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,

    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,
    thumbnailLabel: { display: false },

    // DISPLAY ANIMATION
    // for gallery
    galleryDisplayTransitionDuration: 1500,
    // for thumbnails
    thumbnailDisplayTransition: 'imageSlideUp',
    thumbnailDisplayTransitionDuration: 1200,
    thumbnailDisplayTransitionEasing: 'easeInOutQuint',
    thumbnailDisplayInterval: 60,

    // THUMBNAIL HOVER ANIMATION
    thumbnailBuildInit2: 'image_scale_1.15',
    thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
    touchAnimation: true,
    touchAutoOpenDelay: 500,

    // LIGHTBOX
    viewerGallery: 'none',
    viewerToolbar: { display: false },
    viewerTools: {
        topLeft: 'none',
        topRight: 'none'
    },

    // GALLERY THEME
    galleryTheme: {
        thumbnail: { background: 'white' },
    },

    // DEEP LINKING
    locationHash: true,

}
settings.album = 'none';
jQuery("#nanogallery").nanogallery2(settings);

