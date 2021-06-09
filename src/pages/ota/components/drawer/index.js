import { Drawer, List, useTheme } from "@material-ui/core";

const MyDrawer = (props) => {
    const theme = useTheme();
    return (
        <Drawer
            variant='temporary'
            anchor={theme.direction == 'ltr' ? 'left' : 'right'}
        >
            <List>

            </List>
        </Drawer>
    );
}

export default MyDrawer;