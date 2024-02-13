const decodeToken = (token) => {
  try {
    const tokenParts = token.split('.');
    const encodedPayload = tokenParts[1];
    
    if (!encodedPayload) {
      throw new Error('Invalid token format');
    }

    const decodedPayload = JSON.parse(atob(encodedPayload));
    return decodedPayload;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export default decodeToken;
