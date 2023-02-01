export const ValidateProps = {
    user: {
        username: { type: 'string', minLength: 4, maxLength: 20 },
        fullname: { type: 'string', minLength: 1, maxLength: 50 },
        password: { type: 'string', minLength: 8 },
        email: { type: 'string', minLength: 1 },
        phonenumber: { type: 'string', minLength: 1, maxLength: 13 },
        bio: { type: 'string', minLength: 0, maxLength: 160 },
    }
};