# Simple Lightbox

This is a simple lightbox implementation for displaying images in a popup overlay on a web page.

## Usage

1. Include the necessary CSS and JavaScript files in your HTML:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple lightbox</title>
        <link rel="stylesheet" type="text/css" href="./src/style/light-box.css" />
    </head>
    <body>
        <!-- Your HTML content here -->
        <script src="./src/blocks/popup.js"></script>
        <script src="./src/js/script.js"></script>
        <script>
            var simpleLightbox = new SimpleLightbox(
                {
                    "title": "TEST",
                    "initDiv": "#lightbox",
                    "imageSource": "#images"
                }
            );
        </script>
    </body>
    </html>
    ```

2. Define your images inside a container element:

    ```html
    <div id="images">
        <img src="image1.jpg" alt="Image 1">
        <img src="image2.jpg" alt="Image 2">
        <!-- Add more images as needed -->
    </div>
    ```

3. Instantiate the `SimpleLightbox` class with the appropriate configuration parameters.

## Popup Lightbox Custom Element

The `PopupLight` class defines a custom HTML element `<popup-lightbox>`, which is used to render the lightbox popup.

### Attributes

- `title`: Title of the lightbox.
- `src`: Source URL of the image to be displayed.
- `alt`: Alternate text for the image.
- `actualPage`: Current page number.
- `pagesNumbers`: Total number of pages.

### Styling

The styling of the lightbox is defined within the class using JavaScript. It dynamically generates and appends the necessary styles to the `<head>` of the document.

### Icons

The `#prevIcon()`, `#nextIcon()`, and `#closeIcon()` methods generate SVG icons for the navigation buttons in the lightbox.

### Rendering

The `render()` method updates the content of the custom element based on the attribute values, displaying the title, image, pagination, and navigation buttons accordingly.

## Installation

Simply include the provided CSS and JavaScript files in your project, and you're ready to use the simple lightbox functionality!

