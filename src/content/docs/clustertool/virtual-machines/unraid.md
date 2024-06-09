---
title: Virtual Machine on UnRaid
---

## Downloading Talos

1. Obtain the Talos ISO [here](https://github.com/siderolabs/talos/releases/download/v1.7.0/metal-amd64.iso) by pasting the link into your web browser.

2. Once download copy the isos into the `shares folder`;

    ![shares folder](./img/unraid_isos_shares.png)

## Creating the VM

1. Start by clicking the `Add VM` button under the VM Tab;

    ![Add VM](./img/unraid_add_vm.png)

2. Now click the `Linux` button;

  ![Linux](./img/unraid_linux.png)

2. Supply a name for your new VM;


3. Edit memory to supply at least a minimum memory value of 8192 with the recommended value being 16384 or more;

4. select the OS install iso by select the ios was download before `Talos ISO image`;

  ![Talos ISO image](./img/unraid_talos_iso_image.png)

4. Set the `disk space` to 500GB or 1000GB. Keep the remainder as the default.

    ![disk space](./img/unraid_disk_space.png)

5. Once the VM has been created select the VM and then settings.

    ![settings](./img/unraid_disk_space.png)

7. For the `Network Source` section virbr0:

    ![Network Source](./img/unraid_network.png)

8. Now click the Create
