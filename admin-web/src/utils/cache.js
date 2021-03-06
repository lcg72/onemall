/* eslint-disable */

// localStorage 操作

const cacheKeys = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
};

///
/// 设置 loginToken，分为 accessToken 和 refreshToken

export function setLoginToken(accessToken, refreshToken) {
  setLocalStorage(cacheKeys.ACCESS_TOKEN, accessToken);
  setLocalStorage(cacheKeys.REFRESH_TOKEN, refreshToken);
}

export function getLoginToken() {
  const res = {};
  res[cacheKeys.ACCESS_TOKEN] = getLocalStorage(cacheKeys.ACCESS_TOKEN);
  res[cacheKeys.REFRESH_TOKEN] = getLocalStorage(cacheKeys.REFRESH_TOKEN);
  return res;
}



///
/// 设置 localStorage 公共方法

function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    throw new Error(`localStorage 设置错误! ${e}`);
  }
}

function getLocalStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    throw new Error(`localStorage 获取错误! ${e}`);
  }
}

function removeLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    throw new Error(`localStorage 设置错误! ${e}`);
  }
}
