import { Drawer } from "expo-router/drawer";

<Drawer>
    <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
        drawerLabel: "index",
        title: "Home",
     }}
/>
<Drawer.Screen
     name="user/[id]" // This is the name of the page and must match the url from root
    options={{
    drawerLabel: "Consulta",
    title: "Consulta",
  }}
/>

<Drawer.Screen
     name="TelaC" // This is the name of the page and must match the url from root
    options={{
    drawerLabel: "Agendar",
    title: "Agendar",
  }}
/>
</Drawer>