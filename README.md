# 리액트설치

```
npx create-react-app reactjs-dashboard
```

```
cd reactjs-dashboard
```

# mui 설치

```
npm install @mui/material @emotion/react @emotion/styled
```

```
npm install @mui/icons-material
```

# react router dom 설치

```
npm install react-router-dom
```

```
npm start
```

# 소스 디렉토리 세팅

## src 내부에 폴더 생성

- assets
- components
- dashboard → 메인파일
- routes

# 페이지& 파일 생성

## assets

사용할 이미지 파일 생성

## components

필요한 레이아웃 파일 생성

### app-bar.js

```
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
export default AppBar;
```

### copy-right.js

```
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://youtube.com/@yangdongjun">
        DongjunYang
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
```

### side-drawer.js

```
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 240;
const COLOR = "#1d1d1b";
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: COLOR,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
export default Drawer;
```

## dashboard

main.js

```
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

import MainListItems from "./listItems";

import Copyright from "../components/copy-right";
import AppBar from "../components/app-bar";
import Drawer from "../components/side-drawer";

const COLOR = "#1d1d1b";

const mdTheme = createTheme();

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="absolute" open={open} color="transparent">
                    <Toolbar
                        sx={{
                            pr: "24px", // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: "36px",
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon sx={{ color: "#fff" }} />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="#fff" noWrap sx={{ flexGrow: 1 }}>
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="primary">
                                <NotificationsIcon sx={{ color: "#fff" }} />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={{ bgcolor: COLOR }}>
                    <Toolbar
                        sx={{
                            bgcolor: COLOR,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon sx={{ color: "#fff" }} />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav" sx={{ bgcolor: COLOR }}>
                        <MainListItems />
                        <Divider sx={{ my: 1 }} />
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: "#000",
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
```

listItems.js

```
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import HomeIcon from "@mui/icons-material/Home";

import { useNavigate } from "react-router-dom";

export default function MainListItems() {
  const navigate = useNavigate();
  const style = { color: "#fff" };
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/")}>
        <ListItemIcon>
          <HomeIcon sx={style} />
        </ListItemIcon>
        <ListItemText primary="Home" sx={style} />
      </ListItemButton>
        <ListItemButton onClick={() => navigate("/google-trend")}>
        <ListItemIcon>
          <TrendingUpIcon sx={style} />
        </ListItemIcon>
        <ListItemText primary="Trends" sx={style} />
      </ListItemButton>

    </React.Fragment>
  );
}
```

## routes

trend.jsx

```
import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import MainListItems from "../dashboard/listItems";
import Copyright from "../components/copy-right";
import AppBar from "../components/app-bar";
import Drawer from "../components/side-drawer";

const COLOR = "#1d1d1b";

function Component() {
    const [region, setRegion] = React.useState("US");
    const [trend, setTrend] = React.useState([]);

    const handleAPI = async () => {
        try {
            const res = await fetch(`http://127.0.0.1:8000/api/trends?region=${region}`);
            const json = await res.json();
            if (typeof json.trends !== "undefined") {
                const result = json.trends.map((item, index) => {
                    return { index: index + 1, name: item, region: region };
                });
                setTrend([...result]);
            } else {
                throw Error("404@API error");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Box
            id="div-qrcode"
            component="div"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                alignItems: "center",
            }}
            noValidate
            autoComplete="off"
        >
            <Typography component="h2" variant="h3" color="primary" gutterBottom sx={{ mb: 2, mt: 10 }}>
                Google trend over the world
            </Typography>
            <Typography component="h2" variant="h6" color="warning" gutterBottom>
                Please select region you want to check
            </Typography>
            <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ my: 2 }}>
                <Button disabled={region === "US" ? true : false} onClick={() => setRegion("US")}>
                    America
                </Button>
                <Button disabled={region === "KR" ? true : false} onClick={() => setRegion("KR")}>
                    Korea
                </Button>
                <Button disabled={region === "JP" ? true : false} onClick={() => setRegion("JP")}>
                    Japan
                </Button>
            </ButtonGroup>
            <Button color="primary" variant="contained" onClick={handleAPI} sx={{ mt: 3 }}>
                Get trend
            </Button>
            <TableContainer component={Paper} sx={{ my: 5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple-table-trend">
                    <TableHead sx={{ bgcolor: "#333" }}>
                        <TableRow>
                            <TableCell sx={{ color: "#fff" }}>Index</TableCell>
                            <TableCell sx={{ color: "#fff" }}>Name</TableCell>
                            <TableCell sx={{ color: "#fff" }}>Region</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trend.map((row, index) => (
                            <TableRow key={index} sx={{ border: 0 }}>
                                <TableCell component="th" scope="row">
                                    {row.index}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.region}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

const mdTheme = createTheme();

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="absolute" open={open} color="transparent">
                    <Toolbar
                        sx={{
                            pr: "24px", // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: "36px",
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon sx={{ color: "#fff" }} />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="#fff" noWrap sx={{ flexGrow: 1 }}>
                            Trend
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="primary">
                                <NotificationsIcon sx={{ color: "#fff" }} />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={{ bgcolor: COLOR }}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon sx={{ color: "#fff" }}/>
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <MainListItems />
                        <Divider sx={{ my: 1 }} />
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: "#000",
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} lg={12}>
                                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                    <Component />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Trend() {
    return <DashboardContent />;
}
```

## src

### error-page.jsx

```
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
```

### index.css

```
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

/* canvas- styles */
.canvas-loader {
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.1s infinite ease;
  transform: translateZ(0);
}
```

# 페이지수정

## App.js

```
import Dashboard from "./dashboard/main";

function App() {
  return (
    <div>
      <header></header>
      <section>
        <Dashboard />
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
```

### index.js

```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";

import Trend from "./routes/trend";

import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/google-trend",
            element: <Trend />,
            errorElement: <ErrorPage />,
        },
    ],
    { basename: process.env.PUBLIC_URL }
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
```