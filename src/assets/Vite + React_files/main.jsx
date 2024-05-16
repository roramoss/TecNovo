import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=348c393d"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=348c393d"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=c608d775"; const ReactDOM = __vite__cjsImport2_reactDom_client.__esModule ? __vite__cjsImport2_reactDom_client.default : __vite__cjsImport2_reactDom_client;
import App from "/src/App.jsx?t=1715886861184";
import "/src/index.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=fdd49766";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=fdd49766";
import Primeravista from "/src/Componentes/primeravista/Primeravista.jsx?t=1715884896662";
import Inicio from "/src/Componentes/Inicio/inicio.jsx?t=1715886861184";
import Registro from "/src/Componentes/Registro/Registro.jsx?t=1715886855771";
import Principal from "/src/Componentes/PaginaPrincipal/Principal.jsx";
import ProteccionRoute from "/src/Route/Proteccion.jsx";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(Primeravista, {}, void 0, false, {
        fileName: "C:/Users/ramos/OneDrive/Escritorio/TecNovo/src/main.jsx",
        lineNumber: 17,
        columnNumber: 12
      }, this)
    },
    {
      path: "/Login",
      element: /* @__PURE__ */ jsxDEV(Inicio, {}, void 0, false, {
        fileName: "C:/Users/ramos/OneDrive/Escritorio/TecNovo/src/main.jsx",
        lineNumber: 21,
        columnNumber: 12
      }, this)
    },
    {
      path: "/Registro",
      element: /* @__PURE__ */ jsxDEV(Registro, {}, void 0, false, {
        fileName: "C:/Users/ramos/OneDrive/Escritorio/TecNovo/src/main.jsx",
        lineNumber: 25,
        columnNumber: 12
      }, this)
    },
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(ProteccionRoute, {}, void 0, false, {
        fileName: "C:/Users/ramos/OneDrive/Escritorio/TecNovo/src/main.jsx",
        lineNumber: 30,
        columnNumber: 12
      }, this),
      children: [{
        path: "/Principal",
        element: /* @__PURE__ */ jsxDEV(Principal, {}, void 0, false, {
          fileName: "C:/Users/ramos/OneDrive/Escritorio/TecNovo/src/main.jsx",
          lineNumber: 34,
          columnNumber: 14
        }, this)
      }]
    }
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "C:/Users/ramos/OneDrive/Escritorio/TecNovo/src/main.jsx",
    lineNumber: 51,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "C:/Users/ramos/OneDrive/Escritorio/TecNovo/src/main.jsx",
    lineNumber: 50,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JjO0FBaEJkLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxTQUFTO0FBQ2hCLE9BQU87QUFDUCxPQUFPO0FBQ1AsU0FBU0MscUJBQXFCO0FBQzlCLFNBQVNDLHFCQUFxQkMsc0JBQXNCO0FBQ3BELE9BQU9DLGtCQUFrQjtBQUN6QixPQUFPQyxZQUFZO0FBQ25CLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsZUFBZTtBQUN0QixPQUFPQyxxQkFBcUI7QUFFNUIsTUFBTUMsU0FBU1A7QUFBQUEsRUFBb0I7QUFBQSxJQUNqQztBQUFBLE1BQ0VRLE1BQU87QUFBQSxNQUNQQyxTQUFVLHVCQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBYTtBQUFBLElBQ3pCO0FBQUEsSUFDQTtBQUFBLE1BQ0VELE1BQU87QUFBQSxNQUNQQyxTQUFVLHVCQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFPO0FBQUEsSUFDbkI7QUFBQSxJQUNBO0FBQUEsTUFDRUQsTUFBTTtBQUFBLE1BQ05DLFNBQVMsdUJBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVM7QUFBQSxJQUNwQjtBQUFBLElBRUE7QUFBQSxNQUNFRCxNQUFNO0FBQUEsTUFDTkMsU0FBVSx1QkFBQyxxQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWdCO0FBQUEsTUFDMUJDLFVBQVUsQ0FBRTtBQUFBLFFBRVZGLE1BQU87QUFBQSxRQUNQQyxTQUFVLHVCQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFVO0FBQUEsTUFDdEIsQ0FBQztBQUFBLElBS0Q7QUFBQSxFQUFDO0FBRUo7QUFLRFosU0FBU2MsV0FBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFHbkQsdUJBQUMsTUFBTSxZQUFOLEVBQ0EsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQixLQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0E7QUFDRiIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJCcm93c2VyUm91dGVyIiwiY3JlYXRlQnJvd3NlclJvdXRlciIsIlJvdXRlclByb3ZpZGVyIiwiUHJpbWVyYXZpc3RhIiwiSW5pY2lvIiwiUmVnaXN0cm8iLCJQcmluY2lwYWwiLCJQcm90ZWNjaW9uUm91dGUiLCJyb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsImNoaWxkcmVuIiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLmpzeCdcbmltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyLCBSb3V0ZXJQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByaW1lcmF2aXN0YSBmcm9tICcuL0NvbXBvbmVudGVzL3ByaW1lcmF2aXN0YS9QcmltZXJhdmlzdGEuanN4JztcbmltcG9ydCBJbmljaW8gZnJvbSAnLi9Db21wb25lbnRlcy9JbmljaW8vaW5pY2lvLmpzeCc7XG5pbXBvcnQgUmVnaXN0cm8gZnJvbSAnLi9Db21wb25lbnRlcy9SZWdpc3Ryby9SZWdpc3Ryby5qc3gnO1xuaW1wb3J0IFByaW5jaXBhbCBmcm9tICcuL0NvbXBvbmVudGVzL1BhZ2luYVByaW5jaXBhbC9QcmluY2lwYWwuanN4JztcbmltcG9ydCBQcm90ZWNjaW9uUm91dGUgZnJvbSAnLi9Sb3V0ZS9Qcm90ZWNjaW9uLmpzeCc7XG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xuICB7XG4gICAgcGF0aCA6IFwiL1wiLFxuICAgIGVsZW1lbnQgOiA8UHJpbWVyYXZpc3RhLz4sXG4gIH0sXG4gIHtcbiAgICBwYXRoIDogXCIvTG9naW5cIixcbiAgICBlbGVtZW50IDogPEluaWNpby8+LFxuICB9LFxuICB7XG4gICAgcGF0aCA6XCIvUmVnaXN0cm9cIixcbiAgICBlbGVtZW50OiA8UmVnaXN0cm8vPixcbiAgfSxcblxuICB7IFxuICAgIHBhdGggOlwiL1wiLFxuICAgIGVsZW1lbnQgOiA8UHJvdGVjY2lvblJvdXRlLz4sXG4gICAgY2hpbGRyZW4gOlsge1xuXG4gICAgICBwYXRoIDogXCIvUHJpbmNpcGFsXCIsXG4gICAgICBlbGVtZW50IDogPFByaW5jaXBhbC8+XG4gICAgfSxcbiAgICAgXG4gICAgXSxcbiAgICAgIFxuXG4gICAgfSxcbiAgXG5dKTtcblxuXG5cblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoXG4gIFxuICBcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9Lz5cbiBcbiAgPC9SZWFjdC5TdHJpY3RNb2RlPlxuKVxuXG4iXSwiZmlsZSI6IkM6L1VzZXJzL3JhbW9zL09uZURyaXZlL0VzY3JpdG9yaW8vVGVjTm92by9zcmMvbWFpbi5qc3gifQ==