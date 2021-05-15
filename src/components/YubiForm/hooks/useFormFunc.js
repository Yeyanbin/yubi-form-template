

export default (that) => {

  that.$refs[that.formConfig.ref].getFormData = () => {
    const resObj = {};
    that.formConfig.formLineList.forEach(line => {
      if ( !line.show || line.show(that.formData) ) {

        Object.keys(line.formItemList).forEach(key => {
          const item = line.formItemList[key]
          if ( item._prop && (!item.show || item.show(that.formData)) ) {
            that.formData[item._prop] !== undefined && (resObj[item._prop] = that.formData[item._prop]);
          }
        }, that);
      }
    }, that);

    return resObj;
  }
}