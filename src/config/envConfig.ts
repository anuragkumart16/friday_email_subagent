


/**
 * Application Configuration.
 * 
 * Centralized configuration object populated from environment variables.
 * 
 * @property port - The port number the server will listen on. Defaults to 5001.
 * @property nodeEnv - The current Node.js environment (e.g., 'development', 'production'). Defaults to 'dev'.
 * @property microserviceName - The name of the microservice. Derived from env var or defaults to 'server'.
 */
export const appConfig = {
    port: process.env.PORT || 5001,
    nodeEnv: process.env.NODE_ENV || "dev",
    microserviceName: process.env.MICROSERVICE_NAME ? process.env.MICROSERVICE_NAME + "microservice" : "server"
}

if(!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD){
    throw new Error("Email User and Password are required!")
}
export const emailConfig = {
    EMAIL_USER : process.env.EMAIL_USER,
    EMAIL_PASSWORD : process.env.EMAIL_PASSWORD
}

if(!process.env.GROQ_API_KEY){
    throw new Error("GROQ API KEY is required!")
}
export const groqConfig = {
    GROQ_API_KEY : process.env.GROQ_API_KEY
}