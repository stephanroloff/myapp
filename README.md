# WP REACT APP

This is a Wordpress Theme

## Steps<br><br>

### 1. Clone in wp-content/themes/<br>

```bash
git clone https://github.com/stephanroloff/wp-react-app.git
```

### 2. Move to the folder<br>

```bash
cd wp-react-app/app
```

### 3. Install Dependencies<br>

```bash
npm install
```

### 4. Run for Development:<br>

```bash
npm run dev
```

and for production:<br>

```bash
npm run build
```

### 5. That's all!<br><br><br>

## Routing<br><br>

There are 2 Options of Routing:

### Option 1 Wordpress Routing (Default):

Here you just have to add the shortcode in the Homepage

```bash
[react_app]
```

### Option 2 React Routing (Default):

1. Delete the 404.php Page
2. Go to index.php and comment or delete the line:

```bash
echo do_shortcode('[auth_wp_routing]');
```

and uncomment the line:

```bash
echo do_shortcode('[react_app]');
```

3. Go to App.tsx
   comment or delete the line:

```bash
import { HashRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
```

and uncomment the line:

```bash
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
```
