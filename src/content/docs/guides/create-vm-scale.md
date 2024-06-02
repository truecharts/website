---
title: Creating Virtual Machine for Talos on TrueNAS Scale
---

## Creating a Network Bridge

A network bridge will be needed for running a VM inside of SCALE and to be able to reach the host-machine.
To create a Bridge. Open your TrueNAS Scale WebUI and go to the Network tab.

:::caution[Network]

Do not click `Test Changes` before you finished the whole guide.

:::

### Aquiring Interface Settings

1. Note down the interface IP Address and the Subnet mask of your currently used Interface.

2. Click on Edit on the currently used Interface.

3. Disable `DHCP` and remove all `Alias` by Clicking on the x next to them.

4. Create the Network Bridge like described in the following section.

The Network Interface should now look like this:
![Network Interface ](./img/network_interface.png)

### Creating the Network Bridge

1. Click on Add in the Top Right Corner of the Interfaces Section.

2. Select Type Bridge and give it a Name. The name cannot be changed afterwards. You might want to add a meaningful description to it.

3. Add your network interface as a Bridge Member. (Example here: enp6so)

4. Set the `MTU` to `1500`.

5. In the Alias section click on Add to create a new IP Address Field.

6. Enter the IP-Address and Subnet mask you previously took note off.

7. Click `Test Changes` and confirm the prompt. Wait a bit for the ui to get responsive again.

8. Click on `Save Changes` to save the changes you have made.

    ![Network Changes ](./img/network_changes.png)

9. If something goes wrong and the UI stays unresponsive the changes will be reverted in 60 seconds.

The bridge should look similar to this one when done:

![Network Bridge ](./img/network_bridge.png)

## Creating the ZVOL for the VM

1. Start by going to the `Datasets` section of your TrueNAS Scale WebUI.

2. The size should be between `500GiB` and `1000GiB.`

3. Make sure to select the `Sparse` option

4. We do not recommend to encrypt the dataset.

5. Set the block size to `128KiB`

6. After you are done it should look similar to this:
    ![ZVOL Creation](./img/vm_zvol.png)

## Creating the VM

1. Start by going to the `Virtualization` section of your TrueNAS Scale WebUI.

2. If you want to assign a GPU to the VM, make sure to [isolate](#gpu-isolation) the GPU first.

3. Click on `Add Virtual Machines`

### Operating System

Select the options like shown below:

Make sure to remember the password you have selected.

![VM Operating System](./img/vm_operating_system.png)

### CPU And Memory

1. Select the amount of `Cores` and Set the `Threads` to `2` if your CPU support HyperThreading like in the example below.
    We suggests you to add available Host-Cores minus 1 for your host system.

2. Make sure to allocate enough `RAM` towards your VM with the `Memory Size` setting.

    Minimum Amount of RAM: `8gb`
    Minimum Recommended Amount of RAM. `16GB`

![VM CPU And Memory](./img/vm_cpu_memory.png)

### Disks

Select the previously created Zvol for your VM like shown below:
![VM Disks](./img/vm_disks.png)

### Network Interfaces

Change the `Atach NIC` to the Bridge you have created in the beginning of the guide.
![VM Network](./img/vm_network.png)

### Installation Media

1. Download the Talos Linux Image [here](https://github.com/siderolabs/talos/releases/download/v1.7.0/metal-amd64.iso) and save it to your pc.

2. Click on `Upload New Image File` in the VM Creation Screen and choose `Choose File` and select the downloaded ISO. Make sure to select an location where you want to save your ISO to. An example can be seen below:

    ![VM Installation Media](./img/vm_iso_2.png)

![VM ISO](./img/vm_iso.png)

### GPU

Make sure your GPU is isolated before you try to assign it towards your VM.
If you don't want to assign a GPU to your VM just click `Next` and skip this part of the guide.

![VM GPU](./img/vm_gpu.png)

### Confirm Options

If you followed this guide closely the options shown should look similar to the screenshot below.
Make sure everything is correct and then click on `Save` to finish the VM settings.

![VM Confirm](./img/vm_confirm.png)

## GPU Isolation

1. Go to `System Settings` > `Advanced` in your SCALE UI and scroll down to the section `Isolated GPU Device(s)`.

2. Click on `Configure` on the top right of the section and close the warning.

3. Select the GPU you want to Isolate and use for your VM in the dropdown. Like shown here
    ![GPU Isolate](./img/gpu_isolate.png)

4. Click `Save`. This can take a bit.

5. It should now show your Isolated GPU in the Section. (Might need to refresh and clear your cache for it to show up.)
