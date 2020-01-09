// #region Private Methods

/**
 * Automatically binds all of an object's functions to itself
 * @param obj Object to bind
 */

const _bindAll = (obj: any) => {
    for(const key of Object.getOwnPropertyNames(obj.constructor.prototype)) {
        const val = obj[key];

        if (key !== "constructor" && typeof val === "function") {
            obj[key] = val.bind(obj);
        }

        return obj;
    }
}

// #endregion Private Methods

// #region Export

export const CoreUtils = {
    bindAll: _bindAll,
}

// #endRegion Export