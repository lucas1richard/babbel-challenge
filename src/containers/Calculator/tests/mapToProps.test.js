import {
  mapStateToProps,
  mapDispatchToProps
} from '../mapToProps';

describe('Day/mapToProps', () => {
  describe('mapStateToProps', () => {
    it('exists', () => {
      expect(mapStateToProps).toBeTruthy();
    });
  });
  describe('mapDispatchToProps', () => {
    it('exists', () => {
      const dispatch = jest.fn();
      const mapDispatch = mapDispatchToProps(dispatch);
      mapDispatch.saveMemory()
      mapDispatch.updateValue()
      mapDispatch.equals()
      mapDispatch.reset()
      mapDispatch.restoreMemory()
      mapDispatch.operation()
      expect(dispatch).toHaveBeenCalledTimes(6);
    });
  });
});
