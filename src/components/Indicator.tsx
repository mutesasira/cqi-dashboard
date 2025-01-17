import { indicatorForGroup, dashboards } from "../Store";

import { GroupBase, Select } from "chakra-react-select";
import { Stack, Box } from "@chakra-ui/react";
import { useStore } from "effector-react";
import { Option } from "../interfaces";

const Indicator = ({
    onChange,
    value,
    indicatorGroup,
}: {
    onChange: (option: string) => void;
    value: string;
    indicatorGroup: string;
}) => {
    const store = useStore(dashboards);
    const options: Option[] = store.indicators
        .filter((row: any) => row["kuVtv8R9n8q"] === indicatorGroup)
        .map(({ kToJ1rk0fwY, event }) => ({
            label: kToJ1rk0fwY,
            value: event,
        }));
    const realValue = options.find((v) => v.value === value);
    return (
        <Box flex={1}>
            <Select<Option, false, GroupBase<Option>>
                value={realValue}
                isClearable
                onChange={(e) => onChange(e?.value || "")}
                options={options}
                size="sm"
            />
        </Box>
    );
};

export default Indicator;
