/**
 * App global properties. Default properties. Custom properties is saved in DB.
 * First DB is checked for that property key, if not present then return default
 * values.
 *
 */

//TODO this lib should be modified with a check that if a particular key's value is present in DB 
//then its value to be fetched from DB
// there should be key check for this, only key from list of keys should be entered in DB.
var props = {
    DATABASE_NAME:null,
    DB_URL:null,
    APP_URL:"/app",
    DEFAULT_INDEX_PAGE:"/home",
    DEFAULT_INDEX_PAGE_ID:4, //changes both properties, if index page is changed.
    DEFAULT_LOCALE:"en_US",
    REDIRECT_AFTER_LOGIN:null,
    REDIRECT_AFTER_LOGOUT:null,
    SESSION_MAX_AGE:null,
    DATE_FORMAT:"dd.mmm.yyyy",
    //jqueryui datepicker has different date formatting from the dateformat.js
    //http://docs.jquery.com/UI/Datepicker/formatDate
    JQUERY_UI_DATE_FORMAT:'dd.M.yy',

    DATA_FOLDER_PATH:"/data",
    SETTINGS_PAGE_URL:"/settings",
    PASSWORD_ENC_ALGO:null,
    IMAGE_HANDLER:null,
    THUMB_DIMENSION:null,
    DEFAULT_THUMB_NAME:null,
    THUMB_BACKGROUND:null,
    DEFAULT_DETAIL_NAME:null,
    IMAGE_DETAIL_DIMENSION:null,
    STATIC_MAX_AGE:null

};

function chkDB(key, value) {
    if (value) {
        // persist the key in DB
        return value;
    }

    // TODO create DB services for this
    // look in DB using services
    // getFromDB(key);
    return value;

}

var get = exports.get = function (key) {
    var val = props[key];
    if (val) {
        return val;
    }
};

exports.set = function (key, val) {
    var value = props[key];
    if (value) {
        return value;
    }
    if (val) {
        props[key] = val;
    }
};