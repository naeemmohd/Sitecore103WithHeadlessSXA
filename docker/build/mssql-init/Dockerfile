# escape=`

ARG PARENT_IMAGE
ARG HEADLESS_SERVICES_IMAGE
ARG SPE_RESOURCES_IMAGE

FROM ${HEADLESS_SERVICES_IMAGE} AS headless_services
FROM ${SPE_RESOURCES_IMAGE} AS spe_resource_image
FROM ${PARENT_IMAGE}

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]
 
# Copy and init the JSS / Headless Services Module
COPY --from=headless_services C:\module\db C:\resources\jss
 
# Add SPE module
COPY --from=spe_resource_image C:\module\db C:\resources\spe
