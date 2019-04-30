import Loadable from "../components/loadable/Index";

const getPages = name => Loadable({
  loader: () => import(`../pages/${name}`)
});
export const routes = [{
    path: "/home",
    com: getPages("home"),
    // role: ["all"],
    title: "主页",
    icon: "desktop"
  },
  {
    path: "/icon",
    com: getPages("icon"),
    title: "图标",
    role: ["user"],
    icon: "tags"
  },
  {
    path: "/typography",
    com: getPages("typography"),
    role: ["shop"],
    title: "段落",
    icon: "hdd",
    children: [{
        path: `/typography/grid`,
        com: getPages(`/typography/grid`),
        title: "grid",
        icon: "file"
      },
      {
        path: `/typography/layout`,
        com: getPages(`/typography/layout`),
        title: "layout",
        icon: "cloud"
      },
      {
        path: `/typography/:id`,
        flag: true,
        com: getPages(`/typography/other`),
        title: "other",
        icon: "branches"
      }
    ]
  },
  {
    path: "/nav",
    com: getPages("nav"),
    // role: ["all"],
    title: "导航",
    icon: "link"
  },
  {
    path: "/pagination",
    com: getPages("pagination"),
    role: ["user"],
    title: "分页",
    icon: "retweet"
  },
  {
    path: "/cascader",
    com: getPages("cascader"),
    title: "级联",
    icon: "filter"
  },
  {
    path: "/form",
    com: getPages("form"),
    title: "表单",
    icon: "form"
  }
];


export const loginRoutes = [{
    path: '/login',
    com: getPages('login')
  },
  {
    path: '/register',
    com: getPages('register')
  }
]