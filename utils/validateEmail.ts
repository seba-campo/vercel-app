export function formatAndValidateEmail(email: string) {
    const EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const formattedEmail = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(formattedEmail)) return null;

    return formattedEmail;
}
