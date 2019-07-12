export function selectFilter(state) {
  return state.filter;
}

export function selectValue(state) {
  return state.value;
}

export function selectLoading(state) {
  return state.loading;
}


export function selectItems(state) {
  if (selectFilter(state) === 'CHECKED') {
    return state.items.filter((item) => item.completed);
  }

  if (selectFilter(state) === 'UNCHECKED') {
    return state.items.filter((item) => !item.completed);
  }

  return state.items;
}