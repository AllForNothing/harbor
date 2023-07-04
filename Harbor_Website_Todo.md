## Registry Certificate
- If there is no **Registry Certificate** button, copy your server certificate into the directory `/ca_download/` in your data directory and name it `ca.cert`.

## Customize Banner Message
- ?

## Tag Retention
- https://github.com/goharbor/harbor/issues/18852
- You define tag retention rules on projects and can specify which repositories you want to apply it to.

## Notary
- https://github.com/goharbor/harbor/issues/18631
- these docs need to be changed:
    - [x] https://goharbor.io/docs/2.8.0/install-config/installation-prereqs/
    - [x] https://goharbor.io/docs/2.8.0/install-config/configure-https/
    - [x] https://goharbor.io/docs/2.8.0/install-config/configure-internal-tls/
        - might need reviewing
    - [ ] https://goharbor.io/docs/2.8.0/install-config/configure-yml-file/
        - line 268
    - [x] https://goharbor.io/docs/2.8.0/install-config/run-installer-script/
    - [ ] https://goharbor.io/docs/2.8.0/install-config/harbor-ha-helm/
    - [x] https://goharbor.io/docs/2.8.0/install-config/reconfigure-manage-lifecycle/
    - [x] https://goharbor.io/docs/2.8.0/administration/upgrade/
    - [x] https://goharbor.io/docs/2.8.0/administration/upgrade/upgrade-test/
    - [ ] https://goharbor.io/docs/2.8.0/working-with-projects/project-configuration/implementing-content-trust/
        - line 15
    - [ ] https://goharbor.io/docs/2.8.0/working-with-projects/working-with-images/preheat-images/
        - line 35
    - [ ] https://goharbor.io/docs/2.8.0/working-with-projects/working-with-images/pulling-pushing-images/
        - line 101
    - [ ] https://goharbor.io/docs/2.8.0/working-with-projects/working-with-images/sign-images/
        - line 66-133
    - [ ] https://goharbor.io/docs/2.8.0/build-customize-contribute/compile-guide/
        - line 112-113
    - [ ] https://goharbor.io/docs/2.8.0/build-customize-contribute/use-make/
        - line 45, 51