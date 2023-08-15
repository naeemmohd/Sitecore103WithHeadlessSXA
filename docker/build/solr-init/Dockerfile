# escape=`
 
ARG PARENT_IMAGE
ARG SXA_IMAGE
 
FROM ${SXA_IMAGE} as sxa_image
FROM ${PARENT_IMAGE}
 
SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]
 
# Add SXA module
COPY --from=sxa_image C:\module\solr\cores-sxa.json C:\data\cores-sxa.json
