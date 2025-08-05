export const BASE_URL = "http://localhost:3001";

export class ApiError extends Error {
    response: Response;

    constructor(response: Response, message: string) {
        super(message);
        this.response = response;
    }
}

/**
 * SWR用のfetcher
 * @param endpoint
 * @returns
 */
export const fetcher = <T>(endpoint: string) => {
    return fetch(apiUrl(endpoint)).then((res) => {
        if (!res.ok) {
            throw new ApiError(
                res,
                `API call failed with status: ${res.status}`,
            );
        }
        return res.json() as T;
    });
};

/**
 * POSTリクエストを送信する関数
 * @param endPoint
 * @param data
 * @returns
 */
export const postApi = async <T>(
    endPoint: string,
    data: object = {},
): Promise<T> => {
    const res = await fetch(apiUrl(endPoint), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new ApiError(res, `API call failed with status: ${res.status}`);
    }
    return res.json() as T;
};

/**
 * PUTリクエストを送信する関数
 * @param endPoint
 * @param data
 * @returns
 */
export const putApi = async <T>(
    endPoint: string,
    data: object = {},
): Promise<T> => {
    const res = await fetch(apiUrl(endPoint), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new ApiError(res, `API call failed with status: ${res.status}`);
    }
    return res.json() as T;
};

/**
 * DELETEリクエストを送信する関数
 * @param endPoint
 * @param data
 * @returns
 */
export const deleteApi = async <T>(
    endPoint: string,
    data?: object,
): Promise<T | undefined> => {
    const res = await fetch(apiUrl(endPoint), {
        method: "DELETE",
        ...(data
            ? {
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
              }
            : {}),
    });
    if (!res.ok) {
        throw new ApiError(res, `API call failed with status: ${res.status}`);
    }
    if (res.status === 204) {
        // 204 NO_CONTENT はDELETEが成功したこと、request bodyは無いので何も返さない
        return;
    }
    return res.json() as T;
};

/**
 * APIのURLを生成する関数
 * @param path
 * @returns
 */
const apiUrl = (path: string) => {
    return `${BASE_URL}/${path}`;
};
