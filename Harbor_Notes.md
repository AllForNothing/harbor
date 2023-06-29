---
title: Harbor Notes
weight: 5
---

## Image Digest
- name of image (sha256:...)

## P2P and Image Preheating
- P2P helps with pulling larger images
- finds more efficient points to download the images from
- preheating images prepares the image for pulling
- preheating requires a provider

## Robot Accounts
- robot accounts have a prefix in front of them specifying that they're a robot
- you can control what projects it works under and what permissions it has
- it has a secret/token which is its password
- you can login as the robot in terminal

## Replication
- allows for pulling or pushing images between harbor and another registry

## OCI Index
- manifest (layers) that point towards a list of other image manifests
- act as folders that can contain folders or files
- mainly used for when there are different platforms

## CVE
- CVE's are vulnerabilities that are scanned
- you can choose CVE's to ignore during scanning with project-level or system-level allowlists

## Registry Certificate
- used to connect clients to registry
- More info: https://docs.vmware.com/en/VMware-vSphere/7.0/vmware-vsphere-with-tanzu/GUID-F98E7DAF-7AFF-4E3F-AB98-A026236CE5C8.html
- requires ca.cert in /data/ca_download