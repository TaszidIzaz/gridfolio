/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,

        webpack(config) {
    
        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
            
            test: /\.svg$/i,
            use: [{loader : "@svgr/webpack", options:{ icon: true } }],
            }
        );
    
        return config
        },
        
    };

    module.exports = nextConfig
    
