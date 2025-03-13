/**
* HTTP Code for Continue (100)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100 Continue}
*/
export const CONTINUE = 100;
/**
* HTTP Code for Switching Protocols (101)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101 Switching Protocols}
*/
export const SWITCHING_PROTOCOLS = 101;
/**
* HTTP Code for Processing (102)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102 Processing}
*/
export const PROCESSING = 102;
/**
* HTTP Code for Early Hints (103)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103 Early Hints}
*/
export const EARLY_HINTS = 103;

/**
* HTTP Codes for Informational responses (1XX)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses}
*/
export const INFORMATIONAL = {
CONTINUE,
SWITCHING_PROTOCOLS,
PROCESSING,
EARLY_HINTS
};
/**
* HTTP Code for Ok (200)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200 Ok}
*/
export const OK = 200;
/**
* HTTP Code for Created (201)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201 Created}
*/
export const CREATED = 201;
/**
* HTTP Code for Accepted (202)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202 Accepted}
*/
export const ACCEPTED = 202;
/**
* HTTP Code for Non Authoritative Information (203)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203 Non Authoritative Information}
*/
export const NON_AUTHORITATIVE_INFORMATION = 203;
/**
* HTTP Code for No Content (204)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204 No Content}
*/
export const NO_CONTENT = 204;
/**
* HTTP Code for Reset Content (205)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205 Reset Content}
*/
export const RESET_CONTENT = 205;
/**
* HTTP Code for Partial Content (206)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206 Partial Content}
*/
export const PARTIAL_CONTENT = 206;
/**
* HTTP Code for Multi Status (207)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207 Multi Status}
*/
export const MULTI_STATUS = 207;
/**
* HTTP Code for Already Reported (208)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208 Already Reported}
*/
export const ALREADY_REPORTED = 208;
/**
* HTTP Code for Im Used (226)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226 Im Used}
*/
export const IM_USED = 226;

/**
* HTTP Codes for Successful responses (2XX)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses}
*/
export const SUCCESSFUL = {
OK,
CREATED,
ACCEPTED,
NON_AUTHORITATIVE_INFORMATION,
NO_CONTENT,
RESET_CONTENT,
PARTIAL_CONTENT,
MULTI_STATUS,
ALREADY_REPORTED,
IM_USED
};
/**
* HTTP Code for Multiple Choices (300)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300 Multiple Choices}
*/
export const MULTIPLE_CHOICES = 300;
/**
* HTTP Code for Moved Permanently (301)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301 Moved Permanently}
*/
export const MOVED_PERMANENTLY = 301;
/**
* HTTP Code for Found (302)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302 Found}
*/
export const FOUND = 302;
/**
* HTTP Code for See Other (303)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303 See Other}
*/
export const SEE_OTHER = 303;
/**
* HTTP Code for Not Modified (304)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304 Not Modified}
*/
export const NOT_MODIFIED = 304;
/**
* HTTP Code for Use Proxy (305)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305 Use Proxy}
*/
export const USE_PROXY = 305;
/**
* HTTP Code for Temporary Redirect (307)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307 Temporary Redirect}
*/
export const TEMPORARY_REDIRECT = 307;
/**
* HTTP Code for Permanent Redirect (308)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308 Permanent Redirect}
*/
export const PERMANENT_REDIRECT = 308;

/**
* HTTP Codes for Redirection responses (3XX)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses}
*/
export const REDIRECTION = {
MULTIPLE_CHOICES,
MOVED_PERMANENTLY,
FOUND,
SEE_OTHER,
NOT_MODIFIED,
USE_PROXY,
TEMPORARY_REDIRECT,
PERMANENT_REDIRECT
};
/**
* HTTP Code for Bad Request (400)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400 Bad Request}
*/
export const BAD_REQUEST = 400;
/**
* HTTP Code for Unauthorized (401)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401 Unauthorized}
*/
export const UNAUTHORIZED = 401;
/**
* HTTP Code for Payment Required (402)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402 Payment Required}
*/
export const PAYMENT_REQUIRED = 402;
/**
* HTTP Code for Forbidden (403)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403 Forbidden}
*/
export const FORBIDDEN = 403;
/**
* HTTP Code for Not Found (404)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404 Not Found}
*/
export const NOT_FOUND = 404;
/**
* HTTP Code for Method Not Allowed (405)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405 Method Not Allowed}
*/
export const METHOD_NOT_ALLOWED = 405;
/**
* HTTP Code for Not Acceptable (406)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406 Not Acceptable}
*/
export const NOT_ACCEPTABLE = 406;
/**
* HTTP Code for Proxy Authentication Required (407)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407 Proxy Authentication Required}
*/
export const PROXY_AUTHENTICATION_REQUIRED = 407;
/**
* HTTP Code for Request Timeout (408)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408 Request Timeout}
*/
export const REQUEST_TIMEOUT = 408;
/**
* HTTP Code for Conflict (409)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409 Conflict}
*/
export const CONFLICT = 409;
/**
* HTTP Code for Gone (410)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410 Gone}
*/
export const GONE = 410;
/**
* HTTP Code for Length Required (411)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411 Length Required}
*/
export const LENGTH_REQUIRED = 411;
/**
* HTTP Code for Precondition Failed (412)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412 Precondition Failed}
*/
export const PRECONDITION_FAILED = 412;
/**
* HTTP Code for Payload Too Large (413)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413 Payload Too Large}
*/
export const PAYLOAD_TOO_LARGE = 413;
/**
* HTTP Code for Uri Too Long (414)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414 Uri Too Long}
*/
export const URI_TOO_LONG = 414;
/**
* HTTP Code for Unsupported Media Type (415)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415 Unsupported Media Type}
*/
export const UNSUPPORTED_MEDIA_TYPE = 415;
/**
* HTTP Code for Range Not Satisfiable (416)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416 Range Not Satisfiable}
*/
export const RANGE_NOT_SATISFIABLE = 416;
/**
* HTTP Code for Expectation Failed (417)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417 Expectation Failed}
*/
export const EXPECTATION_FAILED = 417;
/**
* HTTP Code for Im A Teapot (418)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418 Im A Teapot}
*/
export const IM_A_TEAPOT = 418;
/**
* HTTP Code for Misdirected Request (421)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421 Misdirected Request}
*/
export const MISDIRECTED_REQUEST = 421;
/**
* HTTP Code for Unprocessable Entity (422)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422 Unprocessable Entity}
*/
export const UNPROCESSABLE_ENTITY = 422;
/**
* HTTP Code for Locked (423)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423 Locked}
*/
export const LOCKED = 423;
/**
* HTTP Code for Failed Dependency (424)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424 Failed Dependency}
*/
export const FAILED_DEPENDENCY = 424;
/**
* HTTP Code for Too Early (425)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425 Too Early}
*/
export const TOO_EARLY = 425;
/**
* HTTP Code for Upgrade Required (426)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426 Upgrade Required}
*/
export const UPGRADE_REQUIRED = 426;
/**
* HTTP Code for Precondition Required (428)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428 Precondition Required}
*/
export const PRECONDITION_REQUIRED = 428;
/**
* HTTP Code for Too Many Requests (429)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429 Too Many Requests}
*/
export const TOO_MANY_REQUESTS = 429;
/**
* HTTP Code for Request Header Fields Too Large (431)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431 Request Header Fields Too Large}
*/
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
/**
* HTTP Code for Unavailable For Legal Reasons (451)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451 Unavailable For Legal Reasons}
*/
export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;

/**
* HTTP Codes for Client Error responses (4XX)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses}
*/
export const CLIENT_ERROR = {
BAD_REQUEST,
UNAUTHORIZED,
PAYMENT_REQUIRED,
FORBIDDEN,
NOT_FOUND,
METHOD_NOT_ALLOWED,
NOT_ACCEPTABLE,
PROXY_AUTHENTICATION_REQUIRED,
REQUEST_TIMEOUT,
CONFLICT,
GONE,
LENGTH_REQUIRED,
PRECONDITION_FAILED,
PAYLOAD_TOO_LARGE,
URI_TOO_LONG,
UNSUPPORTED_MEDIA_TYPE,
RANGE_NOT_SATISFIABLE,
EXPECTATION_FAILED,
IM_A_TEAPOT,
MISDIRECTED_REQUEST,
UNPROCESSABLE_ENTITY,
LOCKED,
FAILED_DEPENDENCY,
TOO_EARLY,
UPGRADE_REQUIRED,
PRECONDITION_REQUIRED,
TOO_MANY_REQUESTS,
REQUEST_HEADER_FIELDS_TOO_LARGE,
UNAVAILABLE_FOR_LEGAL_REASONS
};
/**
* HTTP Code for Internal Server Error (500)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 Internal Server Error}
*/
export const INTERNAL_SERVER_ERROR = 500;
/**
* HTTP Code for Not Implemented (501)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501 Not Implemented}
*/
export const NOT_IMPLEMENTED = 501;
/**
* HTTP Code for Bad Gateway (502)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502 Bad Gateway}
*/
export const BAD_GATEWAY = 502;
/**
* HTTP Code for Service Unavailable (503)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503 Service Unavailable}
*/
export const SERVICE_UNAVAILABLE = 503;
/**
* HTTP Code for Gateway Timeout (504)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504 Gateway Timeout}
*/
export const GATEWAY_TIMEOUT = 504;
/**
* HTTP Code for Http Version Not Supported (505)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505 Http Version Not Supported}
*/
export const HTTP_VERSION_NOT_SUPPORTED = 505;
/**
* HTTP Code for Variant Also Negotiates (506)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506 Variant Also Negotiates}
*/
export const VARIANT_ALSO_NEGOTIATES = 506;
/**
* HTTP Code for Insufficient Storage (507)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507 Insufficient Storage}
*/
export const INSUFFICIENT_STORAGE = 507;
/**
* HTTP Code for Loop Detected (508)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508 Loop Detected}
*/
export const LOOP_DETECTED = 508;
/**
* HTTP Code for Not Extended (510)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510 Not Extended}
*/
export const NOT_EXTENDED = 510;
/**
* HTTP Code for Network Authentication Required (511)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511 Network Authentication Required}
*/
export const NETWORK_AUTHENTICATION_REQUIRED = 511;

/**
* HTTP Codes for Server Error responses (5XX)
* @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses}
*/
export const SERVER_ERROR = {
INTERNAL_SERVER_ERROR,
NOT_IMPLEMENTED,
BAD_GATEWAY,
SERVICE_UNAVAILABLE,
GATEWAY_TIMEOUT,
HTTP_VERSION_NOT_SUPPORTED,
VARIANT_ALSO_NEGOTIATES,
INSUFFICIENT_STORAGE,
LOOP_DETECTED,
NOT_EXTENDED,
NETWORK_AUTHENTICATION_REQUIRED
};
