import {Coffee, DataObjectRounded, DomainVerificationRounded, SchoolRounded,} from "@mui/icons-material";

export const devWorkInfo = [
    {
        tooltipTitle: "تعداد قهوه های خورده شده",
        icon: <Coffee/>,
        total: 1650,
        color: "lightcoral",
    },
    {
        tooltipTitle: "تعداد دوره های من",
        icon: <SchoolRounded/>,
        total: 25,
        color: "lightskyblue",
    },
    {
        tooltipTitle: "تعداد پروژه های من",
        icon: <DataObjectRounded/>,
        total: 34,
        color: "lightslategray",
    },
    {
        tooltipTitle: "تعداد پروژه های به پایان رسیده",
        icon: <DomainVerificationRounded/>,
        total: 12,
        color: "lightseagreen",
    },
];
