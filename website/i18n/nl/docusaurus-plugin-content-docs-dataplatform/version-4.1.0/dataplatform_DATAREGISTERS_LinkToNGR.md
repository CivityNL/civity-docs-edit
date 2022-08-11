---
id: dataregisters_LinkToNGR
title: Koppeling GeoNetwork
sidebar_label: Koppeling GeoNetwork
---

> Dataplatform heeft een koppeling met het Nationaal Georegister (NGR).
> Nationaal Georegister maakt gebruik van een GeoNetwork-instantie.

Op datasetniveau kan via het metadataveld `Publiceren NGR` worden aangegeven of je de data wil doorzetten naar het Nationaal Georegister (NGR).

:::caution Let op!

De koppeling met NGR kan alleen plaatsvinden als de data ook is doorgezet naar GeoServer. Het metadataveld `Publiceren GeoServer` moet dus in dat geval ook met `ja` worden ingevuld.

:::

Via NGR wordt data ook automatisch op data.overheid.nl beschikbaar gesteld. Het metadataveld Publiceren DONL (niet via NGR) moet daarom met 'Nee' worden ingevuld om te voorkomen dat data dubbel wordt doorgezet naar DONL.

Wanneer metadatavelden niet zijn ingevuld of er een waarde is ingevuld die niet overeenkomt met wat NGR verwacht, zal er een default waarde worden meegegeven. Dit betekent dat de metadata die op NGR te vinden is, anders kan zijn dan wat er op Dataplatform te zien is voor de desbetreffende dataset.

## XML Mapping

In onderstaande code is te zien welke data wij in de XML invullen. De { tekst } blokken geven aan dat wij dynamisch een waarde invullen. Deze waarde is afkomstig uit ofwel de package, resource, of uit een andere configuratie. Dit wordt onder de code verder toegelicht.

Daarnaast zijn er standaardwaardes ingevuld. Zo hebben we voor:

```markup
<gmd:language>
            <gco:CharacterString>dut</gco:CharacterString>
         </gmd:language>
```

Bijvoorbeeld standaard ‘dut’ als waarde staan.
Onder onderstaande code volgt een overzicht van de verschillen { tekst } waardes:
Package.{veldnaam} en resource.{veldnaam} zijn de veldnamen in Engels zoals ze via de API te vinden zijn. Dit zijn dus niet de Nederlandse labels.

```markup
<gmd:MD_Metadata xmlns:gmd="http://www.isotc211.org/2005/gmd"
                 xmlns:gco="http://www.isotc211.org/2005/gco"
                 xmlns:srv="http://www.isotc211.org/2005/srv"
                 xmlns:xs="http://www.w3.org/2001/XMLSchema"
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xmlns:gmx="http://www.isotc211.org/2005/gmx"
                 xmlns:gsr="http://www.isotc211.org/2005/gsr"
                 xmlns:gml="http://www.opengis.net/gml"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 xmlns:gts="http://www.isotc211.org/2005/gts"
                 xsi:schemaLocation="http://www.isotc211.org/2005/gmd http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd">
  <gmd:fileIdentifier>
      <gco:CharacterString>{identifier}</gco:CharacterString>
  </gmd:fileIdentifier>
  <gmd:language>
      <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2/" codeListValue="dut"/>
  </gmd:language>
  <gmd:hierarchyLevel>
      <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode" codeListValue="dataset"/>
  </gmd:hierarchyLevel>
  <gmd:contact>
      <gmd:CI_ResponsibleParty>
         <gmd:individualName>
            <gco:CharacterString>{individual_name}</gco:CharacterString>
         </gmd:individualName>
         <gmd:organisationName>
            <gco:CharacterString>{organisation_name}</gco:CharacterString>
         </gmd:organisationName>
         <gmd:positionName gco:nilReason="missing">
            <gco:CharacterString/>
         </gmd:positionName>
         <gmd:contactInfo>
            <gmd:CI_Contact>
               <gmd:phone>
                  <gmd:CI_Telephone>
                     <gmd:voice>
                        <gco:CharacterString>{phone}</gco:CharacterString>
                     </gmd:voice>
                     <gmd:facsimile gco:nilReason="missing">
                        <gco:CharacterString/>
                     </gmd:facsimile>
                  </gmd:CI_Telephone>
               </gmd:phone>
               <gmd:address>
                  <gmd:CI_Address>
                     <gmd:deliveryPoint>
                        <gco:CharacterString>{delivery_point}</gco:CharacterString>
                     </gmd:deliveryPoint>
                     <gmd:city>
                        <gco:CharacterString>{city}</gco:CharacterString>
                     </gmd:city>
                     <gmd:administrativeArea>
                        <gco:CharacterString>{administrative_area}</gco:CharacterString>
                     </gmd:administrativeArea>
                     <gmd:postalCode>
                        <gco:CharacterString>{postal_code}</gco:CharacterString>
                     </gmd:postalCode>
                     <gmd:country>
                        <gco:CharacterString>{country}</gco:CharacterString>
                     </gmd:country>
                     <gmd:electronicMailAddress>
                        <gco:CharacterString>{email}</gco:CharacterString>
                     </gmd:electronicMailAddress>
                  </gmd:CI_Address>
               </gmd:address>
               <gmd:onlineResource>
                  <gmd:CI_OnlineResource>
                     <gmd:linkage>
                        <gmd:URL>{contact_info_url}</gmd:URL>
                     </gmd:linkage>
                  </gmd:CI_OnlineResource>
               </gmd:onlineResource>
            </gmd:CI_Contact>
         </gmd:contactInfo>
         <gmd:role>
            <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="custodian"/>
         </gmd:role>
      </gmd:CI_ResponsibleParty>
  </gmd:contact>
  <gmd:dateStamp>
      <gco:Date>{date}</gco:Date>
  </gmd:dateStamp>
  <gmd:metadataStandardName>
      <gco:CharacterString>ISO 19115</gco:CharacterString>
  </gmd:metadataStandardName>
  <gmd:metadataStandardVersion>
      <gco:CharacterString>Nederlands metadata profiel op ISO 19115 voor geografie 1.3.1</gco:CharacterString>
  </gmd:metadataStandardVersion>
  <gmd:referenceSystemInfo>
      <gmd:MD_ReferenceSystem>
         <gmd:referenceSystemIdentifier>
            <gmd:RS_Identifier>
               <gmd:code>
                  <gco:CharacterString>{srid}</gco:CharacterString>
               </gmd:code>
               <gmd:codeSpace>
                  <gco:CharacterString>EPSG</gco:CharacterString>
               </gmd:codeSpace>
            </gmd:RS_Identifier>
         </gmd:referenceSystemIdentifier>
      </gmd:MD_ReferenceSystem>
  </gmd:referenceSystemInfo>
  <gmd:identificationInfo>
      <gmd:MD_DataIdentification>
         <gmd:citation>
            <gmd:CI_Citation>
               <gmd:title>
                  <gco:CharacterString>{title}</gco:CharacterString>
               </gmd:title>
               <gmd:date>
                  <gmd:CI_Date>
                     <gmd:date>
                        <gco:Date>{revision_date}</gco:Date>
                     </gmd:date>
                     <gmd:dateType>
                        <gmd:CI_DateTypeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_DateTypeCode" codeListValue="{action}"/>
                     </gmd:dateType>
                  </gmd:CI_Date>
               </gmd:date>
               <gmd:identifier>
                  <gmd:MD_Identifier>
                     <gmd:code>
                        <gco:CharacterString>{identifier}</gco:CharacterString>
                     </gmd:code>
                  </gmd:MD_Identifier>
               </gmd:identifier>
               <!-- <gmd:series>
                  <gmd:CI_Series>
                     <gmd:name>
                        <gco:CharacterString></gco:CharacterString>
                     </gmd:name>
                  </gmd:CI_Series>
               </gmd:series> -->
            </gmd:CI_Citation>
         </gmd:citation>
         <gmd:abstract>
            <gco:CharacterString>{abstract}</gco:CharacterString>
         </gmd:abstract>
         <gmd:purpose>
            <gco:CharacterString>{purpose}</gco:CharacterString>
         </gmd:purpose>
         <gmd:status>
            <gmd:MD_ProgressCode codeListValue="{progress}" codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ProgressCode"/>
         </gmd:status>
         <gmd:pointOfContact>
            <gmd:CI_ResponsibleParty>
               <gmd:individualName>
                  <gco:CharacterString>{individual_name}</gco:CharacterString>
               </gmd:individualName>
               <gmd:organisationName>
                  <gco:CharacterString>{organisation_name}</gco:CharacterString>
               </gmd:organisationName>
               <gmd:positionName>
                  <gco:CharacterString>Inhoudelijk contactpersoon</gco:CharacterString>
               </gmd:positionName>
               <gmd:contactInfo>
                  <gmd:CI_Contact>
                     <gmd:phone>
                        <gmd:CI_Telephone>
                           <gmd:voice>
                              <gco:CharacterString>{phone}</gco:CharacterString>
                           </gmd:voice>
                           <gmd:facsimile gco:nilReason="missing">
                              <gco:CharacterString/>
                           </gmd:facsimile>
                        </gmd:CI_Telephone>
                     </gmd:phone>
                     <gmd:address>
                        <gmd:CI_Address>
                           <gmd:deliveryPoint>
                              <gco:CharacterString>{delivery_point}</gco:CharacterString>
                           </gmd:deliveryPoint>
                           <gmd:city>
                              <gco:CharacterString>{city}</gco:CharacterString>
                           </gmd:city>
                           <gmd:administrativeArea>
                              <gco:CharacterString>{administrative_area}</gco:CharacterString>
                           </gmd:administrativeArea>
                           <gmd:postalCode>
                              <gco:CharacterString>{postal_code}</gco:CharacterString>
                           </gmd:postalCode>
                           <gmd:country>
                              <gco:CharacterString>{country}</gco:CharacterString>
                           </gmd:country>
                           <gmd:electronicMailAddress>
                              <gco:CharacterString>{email}</gco:CharacterString>
                           </gmd:electronicMailAddress>
                        </gmd:CI_Address>
                     </gmd:address>
                     <gmd:onlineResource>
                       <gmd:CI_OnlineResource>
                         <gmd:linkage>
                            <gmd:URL>{contact_info_url}</gmd:URL>
                         </gmd:linkage>
                       </gmd:CI_OnlineResource>
                     </gmd:onlineResource>
                  </gmd:CI_Contact>
               </gmd:contactInfo>
               <gmd:role>
                  <gmd:CI_RoleCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#CI_RoleCode" codeListValue="owner"/>
               </gmd:role>
            </gmd:CI_ResponsibleParty>
         </gmd:pointOfContact>
         <gmd:resourceMaintenance>
            <gmd:MD_MaintenanceInformation>
               <gmd:maintenanceAndUpdateFrequency>
                  <gmd:MD_MaintenanceFrequencyCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_MaintenanceFrequencyCode" codeListValue="{maintenance_frequency}"/>
               </gmd:maintenanceAndUpdateFrequency>
            </gmd:MD_MaintenanceInformation>
         </gmd:resourceMaintenance>
         <gmd:descriptiveKeywords>
            <gmd:MD_Keywords>
              {keyword_xml}
            </gmd:MD_Keywords>
         </gmd:descriptiveKeywords>
        <gmd:resourceConstraints>
            <gmd:MD_Constraints>
              <gmd:useLimitation>
                <gco:CharacterString xmlns:gco="http://www.isotc211.org/2005/gco">Geen beperkingen bekend</gco:CharacterString>
              </gmd:useLimitation>
            </gmd:MD_Constraints>
        </gmd:resourceConstraints>
        <gmd:resourceConstraints>
            <gmd:MD_LegalConstraints>
              <gmd:accessConstraints>
                <gmd:MD_RestrictionCode codeList="http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" codeSpace="dut">Anders</gmd:MD_RestrictionCode>
              </gmd:accessConstraints>
              <gmd:useConstraints>
                <gmd:MD_RestrictionCode codeList="http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_RestrictionCode" codeListValue="otherRestrictions" codeSpace="dut">Anders</gmd:MD_RestrictionCode>
              </gmd:useConstraints>
              <gmd:otherConstraints>
                <gco:CharacterString xmlns:gco="http://www.isotc211.org/2005/gco">{license_url}</gco:CharacterString>
              </gmd:otherConstraints>
            </gmd:MD_LegalConstraints>
         </gmd:resourceConstraints>
         <gmd:spatialResolution>
            <gmd:MD_Resolution>
               <gmd:equivalentScale>
                  <gmd:MD_RepresentativeFraction>
                     <gmd:denominator>
                        <gco:Integer>{spatial_resolution}</gco:Integer>
                     </gmd:denominator>
                  </gmd:MD_RepresentativeFraction>
               </gmd:equivalentScale>
            </gmd:MD_Resolution>
         </gmd:spatialResolution>
         <gmd:language>
            <gco:CharacterString>dut</gco:CharacterString>
         </gmd:language>
         <gmd:topicCategory>
            <gmd:MD_TopicCategoryCode>{theme}</gmd:MD_TopicCategoryCode>
         </gmd:topicCategory>
         <gmd:extent>
            <gmd:EX_Extent>
               <gmd:geographicElement>
                  <gmd:EX_GeographicBoundingBox>
                     <gmd:westBoundLongitude>
                        <gco:Decimal>{xmin}</gco:Decimal>
                     </gmd:westBoundLongitude>
                     <gmd:eastBoundLongitude>
                        <gco:Decimal>{xmax}</gco:Decimal>
                     </gmd:eastBoundLongitude>
                     <gmd:southBoundLatitude>
                        <gco:Decimal>{ymin}</gco:Decimal>
                     </gmd:southBoundLatitude>
                     <gmd:northBoundLatitude>
                        <gco:Decimal>{ymax}</gco:Decimal>
                     </gmd:northBoundLatitude>
                  </gmd:EX_GeographicBoundingBox>
               </gmd:geographicElement>
            </gmd:EX_Extent>
         </gmd:extent>
      </gmd:MD_DataIdentification>
  </gmd:identificationInfo>
    <gmd:distributionInfo xmlns:date="http://exslt.org/dates-and-times">
      <gmd:MD_Distribution>
        <gmd:distributionFormat xmlns:che="http://www.geocat.ch/2008/che">
            <gmd:MD_Format>
               <gmd:name>
                  <gco:CharacterString>{resource_format}</gco:CharacterString>
               </gmd:name>
            </gmd:MD_Format>
        </gmd:distributionFormat>
        <gmd:distributionFormat xmlns:che="http://www.geocat.ch/2008/che">
            <gmd:MD_Format>
               <gmd:name>
                  <gco:CharacterString>WMS</gco:CharacterString>
               </gmd:name>
               <gmd:version>
                  <gco:CharacterString>1.3.0</gco:CharacterString>
               </gmd:version>
               <gmd:specification gco:nilReason="missing">
                  <gco:CharacterString/>
               </gmd:specification>
            </gmd:MD_Format>
        </gmd:distributionFormat>
        <gmd:distributionFormat xmlns:che="http://www.geocat.ch/2008/che">
            <gmd:MD_Format>
               <gmd:name>
                  <gco:CharacterString>WFS</gco:CharacterString>
               </gmd:name>
               <gmd:version>
                  <gco:CharacterString>2.0.0</gco:CharacterString>
               </gmd:version>
               <gmd:specification gco:nilReason="missing">
                  <gco:CharacterString/>
               </gmd:specification>
            </gmd:MD_Format>
         </gmd:distributionFormat>
         <gmd:transferOptions>
            <gmd:MD_DigitalTransferOptions>
               <gmd:onLine xmlns:che="http://www.geocat.ch/2008/che">
                  <gmd:CI_OnlineResource>
                     <gmd:linkage>
                        <gmd:URL>{wms_url}</gmd:URL>
                     </gmd:linkage>
                     <gmd:protocol>
                        <gco:CharacterString>OGC:WMS</gco:CharacterString>
                     </gmd:protocol>
                     <gmd:name>
                        <gco:CharacterString>{layer_name}</gco:CharacterString>
                     </gmd:name>
                     <gmd:description>
                        <gco:CharacterString>{layer_name}</gco:CharacterString>
                     </gmd:description>
                  </gmd:CI_OnlineResource>
               </gmd:onLine>
               <gmd:onLine xmlns:che="http://www.geocat.ch/2008/che">
                  <gmd:CI_OnlineResource>
                     <gmd:linkage>
                        <gmd:URL>{wfs_url}</gmd:URL>
                     </gmd:linkage>
                     <gmd:protocol>
                        <gco:CharacterString>OGC:WFS</gco:CharacterString>
                     </gmd:protocol>
                     <gmd:name>
                        <gco:CharacterString>{layer_name}</gco:CharacterString>
                     </gmd:name>
                     <gmd:description gco:nilReason="missing">
                        <gco:CharacterString>{layer_name}</gco:CharacterString>
                     </gmd:description>
                  </gmd:CI_OnlineResource>
               </gmd:onLine>
               {online_resource_ckan_resource_url}
            </gmd:MD_DigitalTransferOptions>
         </gmd:transferOptions>
      </gmd:MD_Distribution>
  </gmd:distributionInfo>
  <gmd:dataQualityInfo>
      <gmd:DQ_DataQuality>
         <gmd:scope>
            <gmd:DQ_Scope>
               <gmd:level>
                  <gmd:MD_ScopeCode codeList="http://standards.iso.org/ittf/PubliclyAvailableStandards/ISO_19139_Schemas/resources/codelist/ML_gmxCodelists.xml#MD_ScopeCode"
                                    codeListValue="dataset"/>
               </gmd:level>
            </gmd:DQ_Scope>
         </gmd:scope>
         <gmd:lineage xmlns:gn="http://www.fao.org/geonetwork">
            <gmd:LI_Lineage>
               <gmd:statement>
                  <gco:CharacterString>{description}</gco:CharacterString>
               </gmd:statement>
            </gmd:LI_Lineage>
         </gmd:lineage>
      </gmd:DQ_DataQuality>
  </gmd:dataQualityInfo>
</gmd:MD_Metadata>
```

## Uitleg dynamische velden

Hieronder volgt een uitleg op welke manier de verschillende velden dynamisch worden gevuld met een waarde. De waarde is afkomstig uit ofwel de dataset (package) of bijlage (resource) metadata, of uit een andere configuratie.

---

### {abstract}

            abstract=package.notes

Abstract wordt gevuld met metadataveld ‘Omschrijving’ uit de package.

---

### {action}

            action="creation" of "revision"

Gebaseerd op de specifieke actie die heeft plaatsgevonden, d.w.z. of de data aangemaakt of gereviseerd is.

---

### {administrative_area}

            administrative_area=''

Is op dit moment leeg. Er wordt dus een lege string meegegeven.

---

### {city}

            city=''

Lege string wordt meegegeven

---

### {contact_info_url}

            contact_info_url=configuration.contact_url

Contact URL is nu standaard geconfigureerd als https://civity.nl/

---

### {country}

            country=''

Lege string

---

### {date}

            date=resource.created

Created veld uit de bijlage

---

### {delivery_point}

            delivery_point=''

Lege string

---

### {email}

            email=package.contact_point_email

Email uit package metadataveld ‘E-mail contactpunt’

---

### {identifier}

            identifier=resource.resource_id

Bijlage ID

---

### {individual_name}

            individual_name=package.contact_point_name

Naam contactpunt uit dataset

---

### {keyword_xml}

            keyword_xml=package.tags

Trefwoorden lijst uit dataset

---

### {layer_name}

            layer_name=layer_name

Voorbeeld: https://acc-ckan-dataplatform-nl.dataplatform.nl/geoserver/workspace_datastore_ckan_dataplatform_nl/ckan_aefb91fd-3ae4-4ec1-9363-8aaf336f6484/

---

### {license_url}

            license_url=package.license_url or package.license_id

Licentie wordt gevuld met package metadataveld voor Licentie.
Als het veld license_id wordt gebruikt worden de volgende waardes gematcht:
'notspecified' -> 'http://standaarden.overheid.nl/owms/terms/licentieonbekend'
'other-at' -> 'http://www.opendefinition.org/licenses/cc-by'
'other-closed', 'other-nc' -> 'http://standaarden.overheid.nl/owms/terms/geslotenlicentie'

---

### {maintenance_frequency}

            maintenance_frequency =package.update_frequency

Wordt uit het package metadataveld ‘Updatefrequentie’ gehaald.

---

### {online_resource_ckan_resource_url}

            online_resource_ckan_resource_url =online_resource_ckan_resource_url

URL naar CKAN resource.
Voorbeeld: https://acc-ckan-dataplatform-nl.dataplatform.nl/dataset/licentie-veld-test/resource/aefb91fd-3ae4-4ec1-9363-8aaf336f6484

---

### {organisation_name}

            organisation_name=package.organization.title,

Naam van de organisatie wordt uit dataset organisatie gehaald (= Gemeente Rotterdam)

---

### {phone}

            phone=package.contact_point_phone

Wordt gevuld met package metadataveld ‘Telefoon contactpunt’.

---

### {postal_code}

            postal_code=''

Lege string.

---

### {progress}

            progress=package.dataset_status

Waardes wordt op de volgende wijze gematcht:  
'http://data.overheid.nl/status/gepland': 'planned',
'http://data.overheid.nl/status/beschikbaar': 'completed',
'http://data.overheid.nl/status/niet_beschikbaar': 'underDevelopment',
'http://data.overheid.nl/status/in_onderzoek': 'onGoing'
Wanneer er geen waarde is, is de default:  
progress = 'completed'

---

### {purpose}

            purpose=''

Lege string.

---

### {resource_format}

            resource_format=resource.resource_format

Wordt gevuld met het ‘Formaat’ metadataveld uit de bijlage

---

### {revision_date}

            revision_date=resource.last_modified

Laatst gewijzigd datum uit de bijlage

---

### {spatial_resolution}

            spatial_resolution=package.denominator or 0

Als package metadataveld ‘Toepassingsschaal’ (denominator) is ingevuld en een correcte waarde bevat, dan wordt dit veld gebruikt. Standaard ingevuld als 0.

---

### {srid}

            srid= resource.layer_srid

Wordt gevuld met veld Coördinatensysteem uit bijlage

---

### {theme}

            theme=package.theme

Wordt gevuld met thema metadataveld uit package

---

### {title}

            title='''{} - {}'''.format(package.title, resource.name)

Dataset titel en bijlage titel met een ‘-‘ ertussen

---

### {xmin}, {ymin}, {xmax}, {xmax}

            xmin=xmin
            ymin=ymin
            xmax=xmax
            ymax=ymax

Deze waardes komen uit de dataset zelf en worden met een SQL query opgezocht en ingevuld.

---

### {wfs_url}

            wfs_url=resource.wfs_url

Wordt gevuld met WFS endpoint uit de bijlage

---

### {wms_url}

            wms_url=resource.wms_url

Wordt gevuld met WMS endpoint uit de bijlage

---
