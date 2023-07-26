import { Box, Spinner, Stack } from "@chakra-ui/react";
import { useSearch } from "@tanstack/react-location";
import { LocationGenerics } from "../interfaces";
import { useProgramAttributes } from "../Queries";
import InstanceForm from "./InstanceForm";

const TrackedEntityInstanceForm = () => {
    const search = useSearch<LocationGenerics>();

    const { isLoading, isSuccess, isError, error, data } = useProgramAttributes(
        search.program || "",
        search.trackedEntityInstance || "",
        search.isNew || false
    );

    return (
        <Box m="auto" w="100%" padding="10px" flex={1}>
            {isLoading && <Spinner />}
            {isSuccess && (
                <Stack>
                    <InstanceForm
                        programTrackedEntityAttributes={
                            data.program.programTrackedEntityAttributes
                        }
                        instance={data.instance}
                    />
                    <pre>{JSON.stringify(data.instance, null, 2)}</pre>
                </Stack>
            )}
            {isError && <div>{error.message}</div>}
        </Box>
    );
};

export default TrackedEntityInstanceForm;
