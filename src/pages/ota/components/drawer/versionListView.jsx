import { Accordion, AccordionSummary, List, Typography } from "@material-ui/core";

class VersionListView extends React.Component {
    render() {
        return (
            <Accordion>
                <AccordionSummary>
                    <Typography>Accordion</Typography>
                </AccordionSummary>
            </Accordion>
        );
    }
}

export default VersionListView;