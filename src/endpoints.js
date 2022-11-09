export const endpoints = {
  register: "/api/user/register",
  sendEmail: "/api/user/send-mail",
  emailVerify: "/api/user/email/verify",
  getId: (email) => {
    return `/api/email/${email}`;
  },
  getAsset: (id) => {
    return `/api/ironman/${id}`;
  },
};
