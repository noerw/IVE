var app = angular.module("en_US", []);


// ENGLISH translations
app.constant("en_US", {
    // CREATOR
    _MAP: 'Map',
    SCENARIO: 'scenario',
    SCENARIOS: 'scenarios',
    _SCENARIO: 'Scenario',
    _SCENARIOS: 'Scenarios',
    LOCATION: 'location',
    LOCATIONS: 'locations',
    _LOCATION: 'Location',
    _LOCATIONS: 'Locations',
    VIDEO: 'video',
    VIDEOS: 'videos',
    _VIDEO: 'Video',
    _VIDEOS: 'Videos',
    OVERLAY: 'overlay',
    OVERLAYS: 'overlays',
    _OVERLAY: 'Overlay',
    _OVERLAYS: 'Overlays',
    RELATIONSHIP: 'relationship',
    RELATIONSHIPS: 'relationships',
    _RELATIONSHIP: 'Relationship',
    _RELATIONSHIPS: 'Relationships',
    HELP: 'Help',
    LOGIN: 'Login',
    LOGOUT: 'Logout',
    SEARCH: 'Search',
    SEARCH_FOR: 'Search for',
    CREATE: 'Create',
    EDIT: 'Edit',
    DELETE: 'Delete',
    CANCEL: 'Cancel',
    CLOSE: 'Close',
    SEND: 'Send',
    SAVE: 'Save',
    DEFAULT: 'Default',
    ALL: 'All',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    PROPERTIES: 'Properties',
    ID: 'ID',
    EXPORT_ID: 'Export/Import-ID',
    NAME: 'Name',
    DESCRIPTION: 'Description',
    CREATED: 'Created',
    LAST_UPDATED: 'Last updated',
    SHOW: 'Show',
    HIDE: 'Hide',
    RELATED: 'related',
    CONNECTED: 'connected',
    ABSTRACT: 'abstract',
    _ABSTRACT: 'Abstract',
    INDOOR: 'indoor',
    _INDOOR: 'Indoor',
    OUTDOOR: 'outdoor',
    _OUTDOOR: 'Outdoor',
    LONGITUDE: 'Longitude',
    LATITUDE: 'Latitude',
    LOCATION_TYPE: 'Location type',
    RECORDED: 'Recorded',
    THUMBNAILS: 'Thumbnails',
    CATEGORY: 'Category',
    URL: 'URL',
    TYPE: 'Type',
    EXAMPLE: 'Example',
    WEBSITE: 'website',
    _WEBSITE: 'Website',
    PICTURE: 'picture',
    _PICTURE: 'Picture',
    WIDTH: 'Width',
    HEIGHT: 'Height',
    DISTORTION: 'Distortion',
    TRANSLATION: 'Translation',
    ROTATION: 'Rotation',
    AXIS: 'Axix',
    DISPLAY: 'Display',
    PREFERRED: 'Preferred',
    START_LOCATION: 'start location',
    _START_LOCATION: 'Start location',
    END_LOCATION: 'End location',
    CHILD_LOCATION: 'Child location',
    PARENT_LOCATION: 'Parent location',
    CREATE_NEW: 'Create new',
    SELECT_A_NEW: 'Select a new',
    OPEN_PREVIEW_MODE: 'Open preview mode',
    ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS: 'Are you sure that you want to delete this',
    PLEASE_TYPE_IN_THE_NAME_OF_THE: 'Please type in the name of the',
    PLEASE_TYPE_IN_THE_TYPE_OF_THIS: 'Please type in the type of the',
    TO_CONFIRM: 'to confirm',

    // Viewer
    PLEASE_SELECT_A: 'Please select a',
    SCENARIO: 'Scenario',
    LOCATION: 'Location',
    NO_VIDEO_FOUND: 'No video found',

    // REMOTE
    PLEASE_SELECT_A: 'Please select a',
    CHANGE_CURRENT: 'Change current',
    SCENARIO: 'Scenario',
    LOCATION: 'Location',
    VIDEOS: 'Videos',
    OVERLAYS: 'Overlays',
    SETTINGS: 'Settings',
    START_LOCATION: 'start location',
    CONNECTED_LOCATIONS: 'Connected locations',
    NO_SCENARIOS_FOUND: 'No scenarios found',
    NO_LOCATIONS_FOUND: 'No locations found',
    NO_CONNECTED_LOCATIONS_FOUND: 'No connected locations found',
    NO_VIDEOS_FOUND: 'No videos found',
    NO_OVERLAYS_FOUND: 'No overlays found',

    CURRENTLY: 'currently',
    YES: 'Yes',
    NO: 'No',
    PREVIEW: 'Preview',

    SHOW_CONNECTED_LOCATIONS: 'Show connected locations',
    HIDE_CONNECTED_LOCATIONS: 'Hide connected locations',
    SHOW_RELATED_LOCATIONS: 'Show related locations',
    HIDE_RELATED_LOCATIONS: 'Hide related locations',
    SHOW_RELATED_VIDEOS: 'Show related videos',
    HIDE_RELATED_VIDEOS: 'Hide related videos',
    SHOW_RELATED_OVERLAYS: 'Show related overlays',
    HIDE_RELATED_OVERLAYS: 'Hide related overlays',

    SEARCH_FOR_NAMES: 'Search for names',
    SORT_BY: 'Sort by',
    FILTER_BY: 'Filter by',
    FILTER_BY_RELATIONSHIP_TYPE: 'Filter by relationship type',
    NO_FILTER: 'No filter',

    CREATED_ASC: 'Created ascending',
    CREATED_DESC: 'Created descending',
    UPDATED_ASC: 'Updated ascending',
    UPDATED_DESC: 'Updated descending',
    NAME_ASC: 'Name ascending',
    NAME_DESC: 'Name descending',
    SCENARIO_NAME_ASC: 'Scenario name ascending',
    SCENARIO_NAME_DESC: 'Scenario name descending',
    LOCATION_NAME_ASC: 'Location name ascending',
    LOCATION_NAME_DESC: 'Location name descending',
    START_LOCATION_NAME_ASC: 'Start location name ascending',
    START_LOCATION_NAME_DESC: 'Start location name descending',
    END_LOCATION_NAME_ASC: 'End location name ascending',
    END_LOCATION_NAME_DESC: 'End location name descending',
    PARENT_LOCATION_NAME_ASC: 'Parent location name ascending',
    PARENT_LOCATION_NAME_DESC: 'Parent location name descending',
    CHILD_LOCATION_NAME_ASC: 'Child location name ascending',
    CHILD_LOCATION_NAME_DESC: 'Child location name descending',
    VIDEO_NAME_ASC: 'Video name ascending',
    VIDEO_NAME_DESC: 'Video name descending',
    OVERLAY_NAME_ASC: 'Overlay name ascending',
    OVERLAY_NAME_DESC: 'Overlay name descending',

    NEW_VIDEO_CREATED: 'New video has been created',
    NEW_SCENARIO: 'New scenario',
    NEW_LOCATION: 'New location',
    NEW_VIDEO: 'New video',
    NEW_OVERLAY: 'New overlay',
    NEW_RELATIONSHIP: 'New relationship',
    EDIT_RELATIONSHIP: 'Edit relationship',
    SELECT_A_NEW_RELATIONSHIP: 'Select a new relationship',
    SELECT_AND_CREATE_NEW_RELATIONSHIP: 'Select and create a new relationship',

    FILTER_LOCATIONS_BY_SCENARIO: 'Filter locations by scenario',
    FILTER_VIDEOS_BY_SCENARIO: 'Filter videos by scenario',
    FILTER_OVERLAYS_BY_SCENARIO: 'Filter overlays by scenario',

    NO_FILENAME_EXTENSION_REQUIRED: 'no filename extension required',
    EXAMPLE: 'Example',
    FOR_THE_FILES: 'for the files',
    AND: 'and',
    AMOUNT_OF_THUMBNAILS: 'amount of thumbnails',
    FOR_LAST_ITEM_IN_THE_FOLDER: 'for last item in the folder',
    YOU_WILL_RECEIVE_A_NEW_UUID: 'You will receive a new UUID, which has to be used as the folder name for the related video thumbnails. Please copy and paste your created thumbnails inside this folder.',
    PLEASE_USE_THE_UUID_FOR_THE_THUMBNAILS: 'Please use the automatically UUID as the folder name for the related video thumbnails. Please copy and paste your created thumbnails inside this folder.'

    // Feedback client
    YOUR_FEEDBACK: 'Your feedback',
    YOUR_COMMENT: 'Your comment',
    YOUR_RATING: 'Your rating',
    COMMENT: 'Comment',
    LIKE: 'Like',
    DISLIKE: 'Dislike'
});
