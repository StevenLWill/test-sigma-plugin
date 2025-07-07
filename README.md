# Test Sigma Plugin

A simple Sigma Computing plugin that demonstrates variable interaction. This plugin provides a text input that connects to a Sigma variable, allowing real-time updates between the plugin and your Sigma workbook.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Building for Production

```bash
# Create production build
npm run build
```

## Usage in Sigma

1. Deploy this plugin (e.g., to Netlify)
2. In your Sigma workbook:
   - Add a new plugin
   - Set the plugin URL to your deployed URL
   - Create a control variable named "test-variable"
3. The plugin will now sync any text input with your Sigma variable

## Deployment

This plugin is configured for easy deployment to Netlify:

1. Push this repository to GitHub
2. Connect the repository to Netlify
3. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 (or higher)

## Configuration

The plugin is configured to use a text variable named "test-variable". You can modify this in `src/App.tsx` if needed.
