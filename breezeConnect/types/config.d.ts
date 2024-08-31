export namespace apiEndpoint {
    let CUST_DETAILS: string;
    let DEMAT_HOLDING: string;
    let FUND: string;
    let HIST_CHART: string;
    let MARGIN: string;
    let ORDER: string;
    let PORTFOLIO_HOLDING: string;
    let PORTFOLIO_POSITION: string;
    let QUOTE: string;
    let TRADE: string;
    let OPT_CHAIN: string;
    let SQUARE_OFF: string;
    let PREVIEW_ORDER: string;
    let LIMITCALCULATOR: string;
    let MARGINCALCULATOR: string;
}
export namespace apiRequest {
    let POST: string;
    let GET: string;
    let PUT: string;
    let DELETE: string;
}
export namespace responseMessage {
    let BLANK_EXCHANGE_CODE: string;
    let BLANK_STOCK_CODE: string;
    let BLANK_PRODUCT_TYPE: string;
    let BLANK_PRODUCT_TYPE_NFO: string;
    let BLANK_PRODUCT_TYPE_HIST_V2: string;
    let BLANK_ACTION: string;
    let BLANK_ORDER_TYPE: string;
    let BLANK_QUANTITY: string;
    let BLANK_VALIDITY: string;
    let BLANK_ORDER_ID: string;
    let BLANK_FROM_DATE: string;
    let BLANK_TO_DATE: string;
    let BLANK_TRANSACTION_TYPE: string;
    let BLANK_AMOUNT: string;
    let BLANK_SEGMENT: string;
    let BLANK_INTERVAL: string;
    let BLANK_STRIKE_PRICE: string;
    let BLANK_EXPIRY_DATE: string;
    let BLANK_RIGHT_STRIKE_PRICE: string;
    let BLANK_RIGHT_EXPIRY_DATE: string;
    let BLANK_EXPIRY_DATE_STRIKE_PRICE: string;
    let BLANK_OPTION_TYPE: string;
    let BLANK_SOURCE_FLAG: string;
    let BLANK_ORDER_FLOW: string;
    let BLANK_UNDERLYING: string;
    let BLANK_STOP_LOSS_TRIGGER: string;
    let EXCHANGE_CODE_ERROR: string;
    let EXCHANGE_CODE_HIST_V2_ERROR: string;
    let PRODUCT_TYPE_ERROR: string;
    let PRODUCT_TYPE_ERROR_NFO: string;
    let PRODUCT_TYPE_ERROR_HIST_V2: string;
    let ACTION_TYPE_ERROR: string;
    let ORDER_TYPE_ERROR: string;
    let VALIDITY_TYPE_ERROR: string;
    let RIGHT_TYPE_ERROR: string;
    let TRANSACTION_TYPE_ERROR: string;
    let ZERO_AMOUNT_ERROR: string;
    let INTERVAL_TYPE_ERROR: string;
    let INTERVAL_TYPE_ERROR_HIST_V2: string;
    let API_SESSION_ERROR: string;
    let OPT_CHAIN_EXCH_CODE_ERROR: string;
    let NFO_FIELDS_MISSING_ERROR: string;
    let RATE_REFRESH_NOT_CONNECTED: string;
    let RATE_REFRESH_DISCONNECTED: string;
    let ORDER_REFRESH_NOT_CONNECTED: string;
    let ORDER_REFRESH_DISCONNECTED: string;
    let ORDER_NOTIFICATION_SUBSCRIBED: string;
    let OHLCV_STREAM_NOT_CONNECTED: string;
    let OHLCV_STREAM_DISCONNECTED: string;
    let ONE_CLICK_STRATEGY_SUBSCRIBED: string;
    let ONE_CLICK_STRATEGY_UNSUBSCRIBED: string;
    let STOCK_SUBSCRIBE_MESSAGE: string;
    let STOCK_UNSUBSCRIBE_MESSAGE: string;
}
export namespace exceptionMessage {
    let AUTHENICATION_EXCEPTION: string;
    let QUOTE_DEPTH_EXCEPTION: string;
    let EXCHANGE_CODE_EXCEPTION: string;
    let EMPTY_STOCK_CODE_EXCEPTION: string;
    let EXPIRY_DATE_EXCEPTION: string;
    let PRODUCT_TYPE_EXCEPTION: string;
    let STRIKE_PRICE_EXCEPTION: string;
    let RIGHT_EXCEPTION: string;
    let STOCK_INVALID_EXCEPTION: string;
    let WRONG_EXCHANGE_CODE_EXCEPTION: string;
    let STOCK_NOT_EXIST_EXCEPTION: string;
    let ISEC_NSE_STOCK_MAP_EXCEPTION: string;
    let STREAM_OHLC_INTERVAL_ERROR: string;
    let API_REQUEST_EXCEPTION: string;
}
export namespace typeList {
    let INTERVAL_TYPES: string[];
    let INTERVAL_TYPES_HIST_V2: string[];
    let INTERVAL_TYPES_STREAM_OHLC: string[];
    let PRODUCT_TYPES: string[];
    let PRODUCT_TYPES_HIST: string[];
    let PRODUCT_TYPES_HIST_V2: string[];
    let RIGHT_TYPES: string[];
    let ACTION_TYPES: string[];
    let ORDER_TYPES: string[];
    let VALIDITY_TYPES: string[];
    let TRANSACTION_TYPES: string[];
    let EXCHANGE_CODES_HIST: string[];
    let EXCHANGE_CODES_HIST_V2: string[];
    let DERI_EXCH_CODES: string[];
}
export namespace scriptMasterFile {
    let NSE_URL: string;
    let BSE_URL: string;
    let CDNSE_URL: string;
    let FONSE_URL: string;
}
export const feedIntervalMap: {
    '1MIN': string;
    '5MIN': string;
    '30MIN': string;
    '1SEC': string;
};
export const channelIntervalMap: {
    '1minute': string;
    '5minute': string;
    '30minute': string;
    '1second': string;
};
export namespace tuxToUserMap {
    namespace orderFlow {
        let B: string;
        let S: string;
        let N: string;
    }
    namespace limitMarketFlag {
        export let L: string;
        export let M: string;
        let S_1: string;
        export { S_1 as S };
    }
    namespace orderType {
        let T: string;
        let I: string;
        let V: string;
    }
    namespace productType {
        export let F: string;
        export let O: string;
        export let P: string;
        export let U: string;
        let I_1: string;
        export { I_1 as I };
        export let C: string;
        export let Y: string;
        let B_1: string;
        export { B_1 as B };
        let M_1: string;
        export { M_1 as M };
        let T_1: string;
        export { T_1 as T };
    }
    namespace orderStatus {
        export let A: string;
        export let R: string;
        export let Q: string;
        let O_1: string;
        export { O_1 as O };
        let P_1: string;
        export { P_1 as P };
        export let E: string;
        export let J: string;
        export let X: string;
        let B_2: string;
        export { B_2 as B };
        export let D: string;
        let F_1: string;
        export { F_1 as F };
        let C_1: string;
        export { C_1 as C };
    }
    let optionType: {
        C: string;
        P: string;
        "*": string;
    };
}
export namespace urls {
    let API_URL: string;
    let BREEZE_NEW_URL: string;
    let LIVE_FEEDS_URL: string;
    let LIVE_STREAM_URL: string;
    let LIVE_OHLC_STREAM_URL: string;
    let SECURITY_MASTER_URL: string;
    let STOCK_SCRIPT_CSV_URL: string;
}
export namespace roomName {
    let ONE_CLICK_ROOM: string;
    let I_CLICK_2_GAIN: string;
}
